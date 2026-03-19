import { type Domain, type PeerDID, Apollo } from "@hyperledger/identus-sdk"
import { type PresentationClaims, RequestPresentation, Presentation } from "@hyperledger/identus-sdk/plugins/oea"
import { type Actor, Duration, notes, TakeNotes, Wait } from "@serenity-js/core"
import { Ensure, equals } from "@serenity-js/assertions"
import { WalletSdk } from "../abilities/WalletSdk"
import { Utils } from "../Utils"
import { randomUUID } from "crypto"
import _ from "lodash"
import { assert } from "chai"
import { IssueCredential, OfferCredential } from "@hyperledger/identus-sdk/plugins/didcomm"

export class EdgeAgentWorkflow {
  static async connect(edgeAgent: Actor) {
    const url = await edgeAgent.answer<string>(notes().get("invitation"))
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const oobInvitation = await sdk.parseOOBInvitation(new URL(url))
        await sdk.acceptInvitation(oobInvitation)
      })
    )
  }

  static async waitForCredentialOffer(edgeAgent: Actor, numberOfCredentialOffer: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.credentialOfferStackSize(),
        equals(numberOfCredentialOffer)
      )
    )
  }

  static async waitToReceiveCredentialIssuance(edgeAgent: Actor, expectedNumberOfCredentials: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.issuedCredentialStackSize(),
        equals(expectedNumberOfCredentials)
      )
    )
  }

  static async processIssuedCredential(edgeAgent: Actor, recordId: string) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const issuedCredential = messages.issuedCredentialStack.shift()
        const issueCredential = IssueCredential.fromMessage(issuedCredential)
        const credential = await sdk.processIssuedCredentialMessage(issueCredential)
        await edgeAgent.attemptsTo(notes().set(recordId, credential.id))
      })
    )
  }

  static async acceptCredential(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const message = OfferCredential.fromMessage(messages.credentialOfferStack.shift())
        const requestCredential = await sdk.prepareRequestCredentialWithIssuer(message)
        const requestCredentialMessage = requestCredential.makeMessage()
        try {
          await sdk.sendMessage(requestCredentialMessage)
        } catch {
          //
        }
      })
    )
  }

  static async waitForProofRequest(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.proofOfRequestStackSize(),
        equals(1),
      ),
    )
  }

  static async presentVerificationRequest(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]
        const requestPresentationMessage = RequestPresentation.fromMessage(
          messages.proofRequestStack.shift(),
        )
        const presentation = await sdk.createPresentationForRequestProof(
          requestPresentationMessage,
          credential,
        )
        try {
          await sdk.sendMessage(presentation.makeMessage())
        } catch {
          //
        }
      })
    )
  }

  static async verifyPresentation(edgeAgent: Actor, expected: boolean = true) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const presentation = messages.presentationMessagesStack.shift()
        const presentationMessage = Presentation.fromMessage(presentation)

        try {
          const verified = await sdk.handlePresentation(presentationMessage)
          await edgeAgent.attemptsTo(
            Ensure.that(verified, equals(expected))
          )
        } catch (e) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          if (e.message.includes("credential is revoked")) {
            assert.isTrue(expected === false)
          } else {
            if (expected) {
              throw e
            }
          }
        }
      })
    )
  }

  static async tryToPresentVerificationRequestWithWrongAnoncred(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]
        const requestPresentationMessage = RequestPresentation.fromMessage(
          messages.proofRequestStack.shift(),
        )
        try {
          await sdk.createPresentationForRequestProof(requestPresentationMessage, credential)
          assert.fail("Wrong anoncred should produce exception message")
        } catch (e) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          assert.isTrue(e.message.includes("value not found for attribute"))
        }
      })
    )
  }

  static async presentProof(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const credentials = await sdk.verifiableCredentials()
        const credential = credentials[0]
        const requestPresentationMessage = RequestPresentation.fromMessage(
          messages.proofRequestStack.shift(),
        )
        const presentation = await sdk.createPresentationForRequestProof(
          requestPresentationMessage,
          credential,
        )
        try {
          await sdk.sendMessage(presentation.makeMessage())
        } catch {
          //
        }
      }
      )
    )
  }

  static async waitForPresentationMessage(edgeAgent: Actor, numberOfMessages: number = 1) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.presentationStackSize(),
        equals(numberOfMessages)
      )
    )
  }

  static async waitForCredentialRevocationMessage(edgeAgent: Actor, numberOfRevocation: number) {
    await edgeAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        WalletSdk.revocationStackSize(),
        equals(numberOfRevocation)
      )
    )
  }

  static async waitUntilCredentialIsRevoked(edgeAgent: Actor, revokedRecordIdList: string[]) {
    const revokedIdList = await Promise.all(revokedRecordIdList.map(async recordId => {
      return await edgeAgent.answer<string>(notes().get(recordId))
    }))
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk, messages) => {
        const revokes = messages.revocationStack
        await sdk.handle(revokes.at(0))

        const credentials = await sdk.verifiableCredentials()
        const revokedCredentials = await Utils.asyncFilter(credentials, async credential => {
          // checks if it's revoked and part of the revoked ones
          const check1 = await sdk.isCredentialRevoked(credential)
          const check2 = credential.isRevoked()
          const check3 = revokedIdList.includes(credential.id)
          return check1 && check2 && check3
        })
        await edgeAgent.attemptsTo(
          Ensure.that(revokedCredentials.length, equals(revokedRecordIdList.length))
        )
      })
    )
  }

  static async createPeerDids(edgeAgent: Actor, numberOfDids: number = 1) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        await Utils.repeat(numberOfDids, async () => {
          const did = await sdk.createNewPeerDID()
          await edgeAgent.attemptsTo(
            notes().set("lastPeerDID", did)
          )
        })
      })
    )
  }

  static async initiatePresentationRequest<T extends Domain.CredentialType>(
    edgeAgent: Actor,
    type: T,
    toDiD: Domain.DID,
    claims: PresentationClaims<T>
  ) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        await sdk.initiatePresentationRequest(type, toDiD, claims)
      })
    )
  }

  static async createPrismDids(edgeAgent: Actor, numberOfDids: number) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        await Utils.repeat(numberOfDids, async () => {
          await sdk.createNewPrismDID(randomUUID())
        })
      })
    )
  }

  static async copyAgentShouldMatchOriginalAgent(copyEdgeAgent: Actor, originalEdgeAgent: Actor) {
    let expectedCredentials: Domain.Credential[]
    let expectedPeerDids: PeerDID[]
    let expectedPrismDids: Domain.PrismDID[]
    let expectedDidPairs: Domain.DIDPair[]

    await originalEdgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        expectedCredentials = await sdk.verifiableCredentials()
        expectedPeerDids = await sdk.pluto.getAllPeerDIDs()
        expectedPrismDids = await sdk.pluto.getAllPrismDIDs()
        expectedDidPairs = await sdk.pluto.getAllDidPairs()
      })
    )

    await copyEdgeAgent.attemptsTo(
      WalletSdk.execute(async sdk => {
        const credentials = await sdk.verifiableCredentials()
        const peerDids = await sdk.pluto.getAllPeerDIDs()
        const prismDids = await sdk.pluto.getAllPrismDIDs()
        const didPairs = await sdk.pluto.getAllDidPairs()

        await copyEdgeAgent.attemptsTo(
          Ensure.that(credentials.length, equals(expectedCredentials.length)),
          Ensure.that(peerDids.length, equals(expectedPeerDids.length)),
          Ensure.that(prismDids.length, equals(expectedPrismDids.length)),
          Ensure.that(didPairs.length, equals(expectedDidPairs.length)),
        )

        const mapSortPeer = (dids: Domain.PeerDID[]) => dids.map(it => it.did.uuid).sort()
        const mapSortPrism = (dids: Domain.PrismDID[]) => dids.map(it => it.did.uuid).sort()

        assert.isTrue(_.isEqual(expectedCredentials.map(it => it.id), credentials.map(it => it.id)))
        assert.isTrue(_.isEqual(mapSortPeer(expectedPeerDids), mapSortPeer(peerDids)))
        assert.isTrue(_.isEqual(mapSortPrism(expectedPrismDids), mapSortPrism(prismDids)))
        assert.isTrue(_.isEqual(expectedDidPairs.map(it => it.name), expectedDidPairs.map(it => it.name)))
      })
    )
  }


  static async createBackup(edgeAgent: Actor) {
    await edgeAgent.attemptsTo(
      WalletSdk.execute(async (sdk) => {
        const backup = await sdk.backup.createJWE()
        await edgeAgent.attemptsTo(
          notes().set("backup", backup),
          notes().set("seed", sdk.seed)
        )
      })
    )
  }

  static async createNewWalletFromBackup(edgeAgent: Actor) {
    const backup = await edgeAgent.answer<string>(notes().get("backup"))
    const seed = await edgeAgent.answer<Domain.Seed>(notes().get("seed"))
    const walletSdk = new WalletSdk()
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()
    await walletSdk.sdk.backup.restore(backup)
    await walletSdk.sdk.start()
    await walletSdk.sdk.stop()
  }

  static async createNewWalletFromBackupWithWrongSeed(edgeAgent: Actor) {
    const backup = await edgeAgent.answer<string>(notes().get("backup"))
    const walletSdk = new WalletSdk()
    const seed = new Apollo().createRandomSeed().seed
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()

    try {
      await walletSdk.sdk.backup.restore(backup)
      assert.fail("SDK should not be able to restore with wrong seed phrase.")
    } catch (e) {
      assert.isTrue(e != undefined)
    }
  }

  static async backupAndRestoreToNewAgent(newAgent: Actor, edgeAgent: Actor) {
    const backup = await edgeAgent.answer<string>(notes().get("backup"))
    const seed = await edgeAgent.answer<Domain.Seed>(notes().get("seed"))
    const walletSdk = new WalletSdk()
    await walletSdk.createSdk(seed)
    await walletSdk.sdk.pluto.start()
    await walletSdk.sdk.backup.restore(backup)
    await walletSdk.sdk.start()
    newAgent.whoCan(walletSdk, TakeNotes.usingAnEmptyNotepad())
  }
}
