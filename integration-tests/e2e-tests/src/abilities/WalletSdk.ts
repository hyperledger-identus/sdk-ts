import { Ability, Discardable, Initialisable, Interaction, Question, QuestionAdapter } from "@serenity-js/core"
import SDK from "@hyperledger/identus-sdk";
import * as Anoncreds from "@hyperledger/identus-sdk/plugins/anoncreds";
import axios from "axios"
import { Setup } from "../configuration/Setup"
import { randomUUID, UUID } from "crypto"
import { PrismShortFormDIDResolver } from "../resolvers/PrismShortFormDIDResolver"
import { RxdbStore } from "@trust0/identus-store-rxdb"
import InMemory from "@pluto-encrypted/inmemory"

// fallback in any case of dangling sdk agents
export const agentList: Map<string, WalletSdk> = new Map()

export class WalletSdk extends Ability implements Initialisable, Discardable {
  sdk!: SDK.Agent
  store: SDK.Pluto.Store
  messages: MessageQueue = new MessageQueue()
  id: UUID = randomUUID()

  static async withANewInstance(): Promise<Ability> {
    return new WalletSdk()
  }

  private static async getMediatorDidThroughOob(): Promise<string> {
    const response = await axios.get(Setup.mediator.url)
    const encodedData = response.data.split("?_oob=")[1]
    const oobData = JSON.parse(Buffer.from(encodedData, "base64").toString())
    return oobData.from
  }

  static credentialOfferStackSize(): QuestionAdapter<number> {
    return Question.about("credential offer stack", actor => {
      return WalletSdk.as(actor).messages.credentialOfferStack.length
    })
  }

  static issuedCredentialStackSize(): QuestionAdapter<number> {
    return Question.about("issued credential stack", actor => {
      return WalletSdk.as(actor).messages.issuedCredentialStack.length
    })
  }

  static proofOfRequestStackSize(): QuestionAdapter<number> {
    return Question.about("proof of request stack", actor => {
      return WalletSdk.as(actor).messages.proofRequestStack.length
    })
  }

  static revocationStackSize(): QuestionAdapter<number> {
    return Question.about("revocation messages stack", actor => {
      return WalletSdk.as(actor).messages.revocationStack.length
    })
  }

  static presentationStackSize(): QuestionAdapter<number> {
    return Question.about("presentation messages stack", actor => {
      return WalletSdk.as(actor).messages.presentationMessagesStack.length
    })
  }

  static execute(callback: (sdk: SDK.Agent, messages: {
    credentialOfferStack: SDK.Domain.Message[]
    issuedCredentialStack: SDK.Domain.Message[]
    proofRequestStack: SDK.Domain.Message[]
    revocationStack: SDK.Domain.Message[],
    presentationMessagesStack: SDK.Domain.Message[]

  }) => Promise<void>): Interaction {
    return Interaction.where("#actor uses wallet sdk", async actor => {
      await callback(WalletSdk.as(actor).sdk, {
        credentialOfferStack: WalletSdk.as(actor).messages.credentialOfferStack,
        issuedCredentialStack: WalletSdk.as(actor).messages.issuedCredentialStack,
        proofRequestStack: WalletSdk.as(actor).messages.proofRequestStack,
        revocationStack: WalletSdk.as(actor).messages.revocationStack,
        presentationMessagesStack: WalletSdk.as(actor).messages.presentationMessagesStack
      })
    })
  }

  async discard(): Promise<void> {
    agentList.delete(this.id)
    if (this.isInitialised()) {
      await this.sdk.stop()
    }
  }

  async createSdk(seed: SDK.Domain.Seed = undefined) {
    const resolvers = [PrismShortFormDIDResolver]
    const apollo = new SDK.Apollo()
    const castor = new SDK.Castor(apollo, resolvers)

    this.store = new RxdbStore({
      name: [...Array(30)].map(() => Math.random().toString(36)[2]).join(""),
      storage: InMemory,
      password: "random12434",
      ignoreDuplicate: true
    })
    const pluto = new SDK.Pluto(this.store, apollo)
    const mediatorDID = SDK.Domain.DID.fromString(await WalletSdk.getMediatorDidThroughOob())
    this.sdk = SDK.Agent.initialize({
      seed,
      apollo,
      pluto,
      mediatorDID,
      castor
    });
    this.sdk.plugins.register(Anoncreds.plugin);

    this.sdk.addListener(
      SDK.ListenerKey.MESSAGE, async (messages: SDK.Domain.Message[]) => {
        for (const message of messages) {
          await this.messages.enqueue(message)
        }
      }
    )
  }

  async initialise(): Promise<void> {
    try {
      await this.createSdk()
      await this.sdk.start()
      agentList.set(this.id, this)
    } catch (e) {
      console.error(e)
      process.exit(-1)
    }
  }

  isInitialised(): boolean {
    if (!this.sdk) {
      return false
    }
    return this.sdk.state != "stopped"
  }
}

/**
 * Helper class for message queueing processor
 */
class MessageQueue {
  private processingId: NodeJS.Timeout | null = null
  private queue: SDK.Domain.Message[] = []

  credentialOfferStack: SDK.Domain.Message[] = []
  proofRequestStack: SDK.Domain.Message[] = []
  issuedCredentialStack: SDK.Domain.Message[] = []
  revocationStack: SDK.Domain.Message[] = []
  presentationMessagesStack: SDK.Domain.Message[] = []

  receivedMessages: string[] = []

  async enqueue(message: SDK.Domain.Message) {
    this.queue.push(message)

    // auto start processing messages
    if (!this.processingId) {
      await this.processMessages()
    }
  }

  dequeue(): SDK.Domain.Message {
    return this.queue.shift()!
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  // Get the number of messages in the queue
  size(): number {
    return this.queue.length
  }

  async processMessages() {
    this.processingId = setInterval(() => {
      if (!this.isEmpty()) {
        const message: SDK.Domain.Message = this.dequeue()
        const piUri = message.piuri

        // checks if sdk already received message
        if (this.receivedMessages.includes(message.id)) {
          return
        }

        this.receivedMessages.push(message.id)

        if (piUri === SDK.ProtocolType.DidcommOfferCredential) {
          this.credentialOfferStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommRequestPresentation) {
          this.proofRequestStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommIssueCredential) {
          this.issuedCredentialStack.push(message)
        } else if (piUri === SDK.ProtocolType.PrismRevocation) {
          this.revocationStack.push(message)
        } else if (piUri === SDK.ProtocolType.DidcommPresentation) {
          this.presentationMessagesStack.push(message)
        } else if (piUri == SDK.ProtocolType.ProblemReporting) {
          console.error("Received problem report", message)
        } else {
          console.log(piUri)
        }
      } else {
        clearInterval(this.processingId!)
        this.processingId = null
      }
    }, 50)
  }
}
