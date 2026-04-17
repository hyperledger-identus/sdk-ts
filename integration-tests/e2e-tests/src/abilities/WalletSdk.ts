import { Ability, type Discardable, type Initialisable, Interaction, Question, type QuestionAdapter } from "@serenity-js/core"
import {
  Agent,
  type Pluto,
  Apollo,
  Domain,
  ListenerKey,
  Castor,
  ProtocolType,
  PrismDIDMethod,
  type SeedFunction,
} from "@hyperledger/identus-sdk"
import * as Anoncreds from "@hyperledger/identus-sdk/plugins/anoncreds"
import axios from "axios"
import { Setup } from "../configuration/Setup"
import { randomUUID, type UUID } from "crypto"
import { Utils } from "../Utils"
import { cloudAgentApi } from "../configuration/Setup"

export const agentList: Map<string, WalletSdk> = new Map()

export class RequiredArray<T> extends Array<T> {
  at(index: number): T {
    const e = super.at(index)
    if (!e) {
      throw Error(`No element in position [${index}]`)
    }
    return e
  }

  shift(): T {
    const e = super.shift()
    if (!e) {
      throw Error("No element in list")
    }
    return e
  }
}

export class WalletSdk extends Ability implements Initialisable, Discardable {
  seed!: Domain.Seed
  sdk!: Agent
  store!: Pluto.Store
  messages: MessageQueue = new MessageQueue()
  id: UUID = randomUUID()

  static withANewInstance(): Ability {
    return new WalletSdk()
  }

  constructor() {
    super()
  }

  private static async getMediatorDidThroughOob(): Promise<string> {
    const response = await axios.get<string>(`${Setup.mediator.url}/invitationOOB`)
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

  static execute(callback: (sdk: Agent, messages: {
    credentialOfferStack: RequiredArray<Domain.Message>
    issuedCredentialStack: RequiredArray<Domain.Message>
    proofRequestStack: RequiredArray<Domain.Message>
    revocationStack: RequiredArray<Domain.Message>
    presentationMessagesStack: RequiredArray<Domain.Message>
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

  async createSdk(seed?: SeedFunction) {
    const didMethods = [
      new PrismDIDMethod(`${cloudAgentApi.defaults.baseURL}dids/`)
    ]
    const apollo = new Apollo()
    const castor = new Castor(apollo, didMethods)
    const pluto = await Utils.createPlutoInstance()
    const mediatorDID = Domain.DID.fromString(await WalletSdk.getMediatorDidThroughOob())

    this.sdk = Agent.initialize({
      apollo,
      pluto,
      mediatorDID,
      castor,
      seed,
      didMethods
    })

    this.sdk.plugins.register(Anoncreds.plugin)
    this.sdk.addListener(
      ListenerKey.MESSAGE, (messages: Domain.Message[]) => {
        for (const message of messages) {
          this.messages.enqueue(message)
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
    return this.sdk.state !== Domain.Startable.State.STOPPED
  }
}

/**
 * Helper class for message queueing processor
 */
class MessageQueue {
  private processingId: NodeJS.Timeout | null = null
  private queue: RequiredArray<Domain.Message> = new RequiredArray()

  credentialOfferStack: RequiredArray<Domain.Message> = new RequiredArray()
  proofRequestStack: RequiredArray<Domain.Message> = new RequiredArray()
  issuedCredentialStack: RequiredArray<Domain.Message> = new RequiredArray()
  revocationStack: RequiredArray<Domain.Message> = new RequiredArray()
  presentationMessagesStack: RequiredArray<Domain.Message> = new RequiredArray()

  receivedMessages: string[] = []

  enqueue(message: Domain.Message) {
    this.queue.push(message)
    if (!this.processingId) {
      this.processMessages()
    }
  }

  dequeue(): Domain.Message {
    return this.queue.shift()
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  // Get the number of messages in the queue
  size(): number {
    return this.queue.length
  }

  processMessages() {
    this.processingId = setInterval(() => {
      if (!this.isEmpty()) {
        const message: Domain.Message = this.dequeue()
        const piUri = message.piuri

        // checks if sdk already received message
        if (this.receivedMessages.includes(message.id)) {
          console.warn(`Received duplicated message with id [${message.id}].`)
          return
        }

        this.receivedMessages.push(message.id)

        if (piUri === ProtocolType.DidcommOfferCredential) {
          this.credentialOfferStack.push(message)
        } else if (piUri === ProtocolType.DidcommRequestPresentation) {
          this.proofRequestStack.push(message)
        } else if (piUri === ProtocolType.DidcommIssueCredential) {
          this.issuedCredentialStack.push(message)
        } else if (piUri === ProtocolType.PrismRevocation) {
          this.revocationStack.push(message)
        } else if (piUri === ProtocolType.DidcommPresentation) {
          this.presentationMessagesStack.push(message)
        } else if (piUri == ProtocolType.ProblemReporting) {
          console.error("Received problem report", message)
        } else {
          console.log(piUri)
        }
      } else {
        if (this.processingId) {
          clearInterval(this.processingId)
        }
        this.processingId = null
      }
    }, 50)
  }
}
