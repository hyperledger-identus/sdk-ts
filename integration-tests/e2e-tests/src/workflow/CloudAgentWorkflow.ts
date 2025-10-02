import { Actor, Duration, notes, Wait } from "@serenity-js/core"
import { GetRequest, LastResponse, PatchRequest, PostRequest, Send } from "@serenity-js/rest"
import { Ensure, equals } from "@serenity-js/assertions"
import { HttpStatusCode } from "axios"
import { Expectations } from "../screenplay/Expectations"
import { Questions } from "../screenplay/Questions"
import { randomUUID } from "crypto"
import {
  CreateConnectionRequest,
  CreateIssueCredentialRecordRequest,
  ProofRequestAux,
  RequestPresentationInput,
} from "@hyperledger/identus-cloud-agent-client"
import { Setup } from "../configuration/Setup"
import { Utils } from "../Utils"
import SDK from "@hyperledger/identus-sdk"

export class CloudAgentWorkflow {
  static async hasNoConnection(cloudAgent: Actor, edgeAgent: Actor) {
    await cloudAgent.attemptsTo(
      Ensure.that(await cloudAgent.answer(notes().has("connectionId")), equals(false))
    )
    await edgeAgent.attemptsTo(
      Ensure.that(await edgeAgent.answer(notes().has("connectionId")), equals(false))
    )
  }

  static async createConnection(cloudAgent: Actor, label?: string, goalCode?: string, goal?: string) {
    const createConnection = new CreateConnectionRequest()
    createConnection.label = label
    createConnection.goalCode = goalCode
    createConnection.goal = goal

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("connections").with(createConnection)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("invitation", LastResponse.body().invitation.invitationUrl),
      notes().set("connectionId", LastResponse.body().connectionId)
    )
  }

  static async shareInvitation(cloudAgent: Actor, edgeAgent: Actor) {
    const oobInvitation = await cloudAgent.answer(
      notes().get("invitation")
    )
    await edgeAgent.attemptsTo(notes().set("invitation", oobInvitation))
  }

  static async waitForConnectionState(cloudAgent: Actor, state: string) {
    const connectionId = await cloudAgent.answer(
      notes().get("connectionId")
    )
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`connections/${connectionId}`),
        Expectations.propertyValueToBe("state", state)
      )
    )
  }

  static async verifyCredentialState(cloudAgent: Actor, recordId: string, state: string) {
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`issue-credentials/records/${recordId}`),
        Expectations.propertyValueToBe("protocolState", state)
      )
    )
  }

  static async verifyPresentProof(cloudAgent: Actor, state: string) {
    const presentationId = await cloudAgent.answer(
      notes().get("presentationId")
    )
    await cloudAgent.attemptsTo(
      Wait.upTo(Duration.ofSeconds(60)).until(
        Questions.httpGet(`present-proof/presentations/${presentationId}`),
        Expectations.propertyValueToBe("status", state)
      )
    )
  }

  static async offerJwtCredential(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const kid = await cloudAgent.answer<string>(notes().get("kid"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))
    const connectionId = await cloudAgent.answer<string>(notes().get("connectionId"))

    const credential: CreateIssueCredentialRecordRequest = {
      claims: {
        "automation-required": "required value",
      },
      schemaId: schemaUrl,
      automaticIssuance: true,
      issuingDID: did,
      issuingKid: kid,
      connectionId: connectionId,
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers").with(credential)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async offerSDJWTCredential(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const kid = await cloudAgent.answer<string>(notes().get("kid"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))
    const connectionId = await cloudAgent.answer<string>(notes().get("connectionId"))

    const credential: CreateIssueCredentialRecordRequest = {
      schemaId: schemaUrl,
      validityPeriod: 36000,
      claims: {
        "automation-required": "required value",
      },
      automaticIssuance: true,
      issuingDID: did,
      issuingKid: kid,
      connectionId: connectionId,
      credentialFormat: "SDJWT"
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers").with(credential)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async offerAnonymousCredential(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const kid = await cloudAgent.answer<string>(notes().get("kid"))
    const definitionGuid = await cloudAgent.answer<string>(notes().get("definition_guid"))
    const connectionId = await cloudAgent.answer<string>(notes().get("connectionId"))

    const credential: CreateIssueCredentialRecordRequest = {
      claims: {
        "name": "automation",
        "age": "99",
        "gender": "M"
      },
      automaticIssuance: true,
      issuingDID: did,
      connectionId: connectionId,
      issuingKid: kid,
      credentialFormat: "AnonCreds",
      credentialDefinitionId: definitionGuid
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers").with(credential)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async createJwtConnectionlessCredentialOfferInvitation(cloudAgent: Actor,) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const kid = await cloudAgent.answer<string>(notes().get("kid"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))

    const offer = {
      validityPeriod: 3600,
      credentialFormat: "JWT",
      claims: {
        "automation-required": randomUUID()
      },
      automaticIssuance: true,
      issuingDID: did,
      issuingKid: kid,
      schemaId: schemaUrl,
      goalCode: "automation-connectionless-jwt-issuance",
      goal: "automation",
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("issue-credentials/credential-offers/invitation").with(offer)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("invitation", LastResponse.body().invitation.invitationUrl),
      notes().set("recordId", LastResponse.body().recordId)
    )
  }

  static async createJwtConnectionlessVerificationInvite(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))

    const proof = new ProofRequestAux()
    proof.schemaId = schemaUrl
    proof.trustIssuers = [did]

    const presentProofRequest = {
      options: {
        challenge: randomUUID(),
        domain: Setup.agent.url
      },
      goalCode: "automation-connectionless-jwt-verification",
      goal: "automation",
      credentialFormat: "JWT",
      proofs: [
        proof
      ]
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations/invitation").with(presentProofRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("invitation", LastResponse.body().invitation.invitationUrl),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForPresentProof(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))
    const connectionId = await cloudAgent.answer(notes().get("connectionId"))

    const presentProofRequest: RequestPresentationInput = {
      options: {
        challenge: randomUUID(),
        domain: Setup.agent.url
      },
      proofs: [{
        schemaId: schemaUrl,
        trustIssuers: [did]
      }],
      credentialFormat: "JWT",
      connectionId: connectionId
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentProofRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForSDJWTPresentProof(cloudAgent: Actor) {
    const did = await cloudAgent.answer<string>(notes().get("did"))
    const schemaUrl = await cloudAgent.answer<string>(notes().get("schema_url"))
    const connectionId = await cloudAgent.answer(notes().get("connectionId"))

    const presentProofRequest: RequestPresentationInput = {
      options: {
        challenge: randomUUID(),
        domain: Setup.agent.url
      },
      proofs: [{
        schemaId: schemaUrl,
        trustIssuers: [did],
      }],
      credentialFormat: "SDJWT",
      claims: {},
      connectionId: connectionId
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentProofRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForPresentProofAnonCreds(cloudAgent: Actor) {
    const definitionId = await cloudAgent.answer<string>(notes().get("definition_id"))
    const connectionId = await cloudAgent.answer<string>(notes().get("connectionId"))

    const presentationRequest = {
      connectionId: connectionId,
      credentialFormat: "AnonCreds",
      anoncredPresentationRequest: {
        requested_attributes: {
          gender: {
            name: "gender",
            restrictions: [{
              "attr::gender::value": "M",
              cred_def_id: definitionId
            }]
          }
        },
        requested_predicates: {
          age: {
            name: "age",
            p_type: ">=",
            p_value: 18,
            restrictions: [{
              cred_def_id: definitionId
            }]
          }
        },
        name: "proof_req_1",
        nonce: Utils.generateNonce(25),
        version: "0.1"
      },
      proofs: [],
      options: null
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentationRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForPresentProofAnonCredsWithUnexpectedAttributes(cloudAgent: Actor) {
    const anoncredGuid = Setup.secp256k1
    const definitionUrl = `${Setup.agent.url}/credential-definition-registry/definitions/${anoncredGuid}/definition`
    const connectionId = await cloudAgent.answer(notes().get("connectionId"))

    const presentationRequest = {
      connectionId: connectionId,
      credentialFormat: "AnonCreds",
      anoncredPresentationRequest: {
        requested_attributes: {
          driversLicense: {
            name: "driversLicense",
            restrictions: [{
              "attr::driversLicense::value": "B",
              cred_def_id: definitionUrl
            }]
          }
        },
        requested_predicates: {},
        name: "proof_req_1",
        nonce: Utils.generateNonce(25),
        version: "0.1"
      },
      proofs: [],
      options: null
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentationRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async askForPresentProofAnonCredsWithUnexpectedValues(cloudAgent: Actor) {
    const anoncredGuid = Setup.secp256k1.did
    const definitionUrl = `${Setup.agent.url}/credential-definition-registry/definitions/${anoncredGuid}/definition`
    const connectionId = await cloudAgent.answer(notes().get("connectionId"))

    const presentationRequest = {
      connectionId: connectionId,
      credentialFormat: "AnonCreds",
      anoncredPresentationRequest: {
        requested_attributes: {
          name: {
            name: "name",
            restrictions: [{
              "attr::name::value": "John",
              cred_def_id: definitionUrl
            }]
          }
        },
        requested_predicates: {},
        name: "proof_req_1",
        nonce: Utils.generateNonce(25),
        version: "0.1"
      },
      proofs: [],
      options: null
    }

    await cloudAgent.attemptsTo(
      Send.a(PostRequest.to("present-proof/presentations").with(presentationRequest)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Created)),
      notes().set("presentationId", LastResponse.body().presentationId)
    )
  }

  static async getCredential(cloudAgent: Actor, recordId: string) {//}: Promise<Credential> {
    await cloudAgent.attemptsTo(
      Send.a(GetRequest.to(`issue-credentials/records/${recordId}`)),
      Ensure.that(LastResponse.status(), equals(HttpStatusCode.Ok))
    )
    return await LastResponse.body().answeredBy(cloudAgent)
  }

  static async getCredentialStatusList(cloudAgent: Actor, recordIdList: string[]): Promise<Map<string, string>> {
    const statusRegistry = new Map<string, string>()
    for (const recordId of recordIdList) {
      const credentialResponse = await this.getCredential(cloudAgent, recordId)
      const jwtString = Utils.decodeBase64URL(credentialResponse.credential)
      const decoded = SDK.JWTCredential.fromJWS(jwtString)
      const credentialStatus = decoded.vc.credentialStatus as any
      const statusList = credentialStatus.statusListCredential
      statusRegistry.set(recordId, statusList)
    }
    return statusRegistry
  }

  static async revokeCredential(cloudAgent: Actor, numberOfRevokedCredentials: number) {
    const revokedRecordIdList = []
    const recordIdList = await cloudAgent.answer(notes().get("recordIdList"))
    const statusesList = await this.getCredentialStatusList(cloudAgent, recordIdList)
    await Utils.repeat(numberOfRevokedCredentials, async () => {
      const recordId = recordIdList.shift()!
      await cloudAgent.attemptsTo(
        Send.a(GetRequest.to(statusesList.get(recordId))),
        notes().set("statusListEncoded", LastResponse.body().credentialSubject.encodedList),
        Send.a(PatchRequest.to(`credential-status/revoke-credential/${recordId}`)),
        Ensure.that(LastResponse.status(), equals(HttpStatusCode.Ok)),
        Wait.upTo(Duration.ofSeconds(60)).until(
          Questions.httpGet(statusesList.get(recordId)),
          Expectations.propertyIsMetFor("credentialSubject.encodedList", async (property) => {
            return property != await cloudAgent.answer(notes().get("statusListEncoded"))
          })
        )
      )
      revokedRecordIdList.push(recordId)
    })

    await cloudAgent.attemptsTo(
      notes().set("recordIdList", recordIdList),
      notes().set("revokedRecordIdList", revokedRecordIdList)
    )
  }
}
