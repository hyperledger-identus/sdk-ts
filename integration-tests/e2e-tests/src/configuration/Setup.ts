import {
  CreateManagedDidRequest,
  CreateManagedDidRequestDocumentTemplate,
  CreateManagedDIDResponse,
  CredentialDefinitionInput,
  CredentialDefinitionResponse,
  CredentialSchemaInput,
  CredentialSchemaResponse,
  Curve,
  DIDDocument,
  DIDOperationResponse,
  DIDResolutionResult,
  ManagedDIDKeyTemplate,
  PrismEnvelopeResponse,
  Purpose
} from "@hyperledger/identus-cloud-agent-client"
import { randomUUID } from "crypto"
import axios, { AxiosResponse } from "axios"
import { configDotenv } from "dotenv"
import assert from "assert"

configDotenv()

type DataByDid = {
  did: string
  jwtSchema: {
    guid: string
    url: string
  }
  credDefUrl: {
    guid: string
    id: string
  }
  credDefDid: {
    guid: string,
    id: string
  }
}
export class Setup {
  public static agent = {
    url: process.env.AGENT_URL,
    apikey: process.env.APIKEY
  }
  public static mediator = {
    url: process.env.MEDIATOR_OOB_URL
  }

  public static secp256k1: DataByDid = {
    did: process.env.SECP256K1_PUBLISHED_DID,
    jwtSchema: {
      guid: process.env.SECP256K1_JWT_SCHEMA_GUID,
      url: ''
    },
    credDefUrl: {
      guid: process.env.SECP256K1_ANONCRED_DEFINITION_GUID,
      id: ''
    },
    credDefDid: {
      guid: process.env.SECP256K1_ANONCRED_DEFINITION_ID,
      id: ''
    }
  }

  public static ed25519: DataByDid = {
    did: process.env.ED25519_PUBLISHED_DID,
    jwtSchema: {
      guid: process.env.ED25519_JWT_SCHEMA_GUID,
      url: ''
    },
    credDefUrl: {
      guid: process.env.ED25519_ANONCRED_DEFINITION_GUID,
      id: ''
    },
    credDefDid: {
      guid: process.env.ED25519_ANONCRED_DEFINITION_ID,
      id: ''
    }
  }

  public static async init() {
    if (this.agent.url.endsWith('/')) {
      this.agent.url = this.agent.url.slice(0, -1)
    }
    this.secp256k1.did = await this.verifyDidSetup(this.secp256k1.did, Curve.Secp256k1)
    await this.verifyJwtSchemaSetupDid('', this.secp256k1.did)
    this.secp256k1.jwtSchema = await this.verifyJwtSchemaSetupUrl(this.secp256k1.jwtSchema.guid, this.secp256k1.did)
    this.secp256k1.credDefUrl = await this.verifyAnoncredDefinitionUrl(
      this.secp256k1.credDefUrl.guid,
      this.secp256k1.did,
      this.secp256k1.did
    )
    this.secp256k1.credDefDid = await this.verifyAnoncredDefinitionDid(
      this.secp256k1.credDefDid.guid,
      this.secp256k1.did,
      this.secp256k1.did
    )
    this.ed25519.did = await this.verifyDidSetup(this.ed25519.did, Curve.Ed25519)
    this.ed25519.jwtSchema = await this.verifyJwtSchemaSetupUrl(this.ed25519.jwtSchema.guid, this.ed25519.did)
    this.ed25519.credDefUrl = await this.verifyAnoncredDefinitionUrl(
      this.ed25519.credDefUrl.guid,
      this.ed25519.did,
      this.ed25519.did
    )
    this.ed25519.credDefDid = await this.verifyAnoncredDefinitionDid(
      this.ed25519.credDefDid.guid,
      this.ed25519.did,
      this.ed25519.did
    )

    console.log('Agent', this.agent)
    console.log('Mediator', this.mediator)
    console.log('Secp256k1', this.secp256k1)
    console.log('Ed25519', this.ed25519)
  }

  private static async verifyDidSetup(initialDid: string, curve: Curve) {
    try {
      assert(initialDid != null)
      assert(initialDid != "")
      let didDocumentResponse = await cloudAgentApi.get<DIDResolutionResult>(`dids/${initialDid}`)
      let assertionKeys = didDocumentResponse.data.didDocument.assertionMethod.filter(am => am.includes('#assert1'))
      let authenticationKeys = didDocumentResponse.data.didDocument.authentication.filter(a => a.includes('#key-authentication-1'))
      assert(assertionKeys.length == 1, "Expected 'assert1' to be part of provided did")
      assert(authenticationKeys.length == 1, "Expected 'key-authentication-1' to be part of provided did")
      return initialDid
    } catch (e) {
      const creationData = new CreateManagedDidRequest()
      creationData.documentTemplate = new CreateManagedDidRequestDocumentTemplate()

      const assertionKey = new ManagedDIDKeyTemplate()
      assertionKey.id = "assert1"
      assertionKey.purpose = Purpose.AssertionMethod
      assertionKey.curve = curve

      const authenticationKey = new ManagedDIDKeyTemplate()
      authenticationKey.id = "key-authentication-1"
      authenticationKey.purpose = Purpose.Authentication
      assertionKey.curve = curve

      creationData.documentTemplate.publicKeys = [
        assertionKey,
        authenticationKey
      ]
      creationData.documentTemplate.services = []

      let creationResponse: AxiosResponse<CreateManagedDIDResponse>
      try {
        creationResponse = await cloudAgentApi.post<CreateManagedDIDResponse>("did-registrar/dids", creationData)
      } catch (e) {
        console.log(e)
      }

      const longFormDid = creationResponse.data.longFormDid
      const publicationResponse = await cloudAgentApi.post<DIDOperationResponse>(
        `did-registrar/dids/${longFormDid}/publications`
      )
      const shortFormDid = publicationResponse.data.scheduledOperation.didRef

      const abortController = new AbortController()
      setTimeout(() => { abortController.abort() }, 60000)

      return new Promise<string>((resolve, reject) => {
        if (!abortController.signal.aborted) {
          abortController.signal.onabort = () =>
            reject("[60s] Timeout waiting for the publication")
        }
        const interval = setInterval(async () => {
          const didResponse = await cloudAgentApi.get(
            `did-registrar/dids/${shortFormDid}`
          )
          if (didResponse.data.status == "PUBLISHED") {
            clearInterval(interval)
            resolve(didResponse.data.did)
          }
        }, 1000)
      })
    }
  }

  private static async verifyJwtSchemaSetupUrl(jwtSchemaGuid: string, did: string): Promise<{ guid: string, url: string }> {
    try {
      assert(jwtSchemaGuid != null)
      assert(jwtSchemaGuid != "")
      let schemaResponse = await cloudAgentApi.get<CredentialSchemaResponse>(`schema-registry/schemas/${jwtSchemaGuid}`)
      return {
        guid: jwtSchemaGuid,
        url: `${Setup.agent.url}${schemaResponse.data.self}`
      }
    } catch {
      const credentialSchemaInput: CredentialSchemaInput = {
        author: did,
        description: "Some description to automation generated schema",
        name: "automation-schema-" + randomUUID(),
        schema: {
          $id: `https://example.com/automated-credential`,
          $schema: "https://json-schema.org/draft/2020-12/schema",
          description: "automated-credential-schema",
          type: "object",
          properties: {
            "automation-required": {
              type: "string",
            },
            "automation-optional": {
              type: "string",
            },
          },
          required: ["automation-required"],
          additionalProperties: false,
        },
        tags: ["automation"],
        type: "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
        version: "1.0.0"
      }

      const schemaResponse = await cloudAgentApi.post<CredentialSchemaResponse>(
        "schema-registry/schemas",
        credentialSchemaInput
      )

      return {
        guid: schemaResponse.data.guid,
        url: `${Setup.agent.url}${schemaResponse.data.self}`
      }
    }
  }

    private static async verifyJwtSchemaSetupDid(jwtSchemaGuid: string, did: string): Promise<{ guid: string, url: string }> {
    try {
      throw 'forced'
      // assert(jwtSchemaGuid != null)
      // assert(jwtSchemaGuid != "")
      // let schemaResponse = await cloudAgentApi.get<CredentialSchemaResponse>(`schema-registry/schemas/${jwtSchemaGuid}`)
      // return {
      //   guid: jwtSchemaGuid,
      //   url: `${Setup.agent.url}${schemaResponse.data.self}`
      // }
    } catch {
      const credentialSchemaInput: CredentialSchemaInput = {
        author: did,
        description: "Some description to automation generated schema",
        name: "automation-schema-" + randomUUID(),
        schema: {
          $id: `https://example.com/automated-credential`,
          $schema: "https://json-schema.org/draft/2020-12/schema",
          description: "automated-credential-schema",
          type: "object",
          properties: {
            "automation-required": {
              type: "string",
            },
            "automation-optional": {
              type: "string",
            },
          },
          required: ["automation-required"],
          additionalProperties: false,
        },
        tags: ["automation"],
        type: "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
        version: "1.0.0"
      }

      const schemaResponse = await cloudAgentApi.post<PrismEnvelopeResponse>(
        "schema-registry/schemas/did-url",
        credentialSchemaInput
      )

      return {
        guid: schemaResponse.data.resource,
        url: `${Setup.agent.url}${schemaResponse.data.resource}`
      }
    }
  }

  private static async verifyAnoncredDefinitionUrl(
    initialAnoncredDefinition: string,
    did: string,
    schemaDid: string
  ): Promise<{ guid: string, id: string }> {
    try {
      assert(initialAnoncredDefinition != null)
      assert(initialAnoncredDefinition != "")
      let anoncredDefUrl = await cloudAgentApi.get(`credential-definition-registry/definitions/${initialAnoncredDefinition}`)
      return {
        guid: initialAnoncredDefinition,
        id: `${Setup.agent.url}credential-definition-registry/definitions/${initialAnoncredDefinition}/definition`
      }
    } catch (err) {
      const schema = {
        name: "Automation Anoncred",
        version: "1.0",
        issuerId: schemaDid,
        attrNames: ["name", "age", "gender"]
      }

      const credentialSchemaInput: CredentialSchemaInput = {
        name: "automation-anoncred-schema-" + randomUUID(),
        version: "2.0.0",
        type: "AnoncredSchemaV1",
        schema: schema,
        author: did,
        tags: ["automation"],
        description: "Anoncred Schema for TS"
      }

      const newSchema = await cloudAgentApi.post(
        "schema-registry/schemas",
        credentialSchemaInput
      )

      const newSchemaGuid = newSchema.data.guid

      const definitionInput: CredentialDefinitionInput = {
        name: "automation-anoncred-definition-" + randomUUID(),
        version: "1.0.0",
        tag: "automation-test",
        author: did,
        schemaId: `${this.agent.url}schema-registry/schemas/${newSchemaGuid}/schema`,
        signatureType: "CL",
        supportRevocation: false,
        description: "Test Automation Auto-Generated TS"
      }

      const credentialDefinition = await cloudAgentApi.post<CredentialDefinitionResponse>(
        "credential-definition-registry/definitions",
        definitionInput
      )

      return {
        guid: credentialDefinition.data.guid,
        id: `${Setup.agent.url}credential-definition-registry/definitions/${credentialDefinition.data.guid}/definition`
      }
    }
  }

  private static async verifyAnoncredDefinitionDid(
    initialAnoncredDefinition: string,
    did: string,
    schemaDid: string
  ): Promise<{ guid: string, id: string }> {
    try {
      assert(initialAnoncredDefinition != null)
      assert(initialAnoncredDefinition != "")
      let anoncredDefDid = await cloudAgentApi.get(
        `credential-definition-registry/definitions/${initialAnoncredDefinition}`
      )
      return {
        guid: initialAnoncredDefinition,
        id: anoncredDefDid.data.longId
      }
    } catch (err) {
      const schema = {
        name: "Automation Anoncred",
        version: "1.0",
        issuerId: schemaDid,
        attrNames: ["name", "age", "gender"]
      }

      const credentialSchemaInput: CredentialSchemaInput = {
        name: "automation-anoncred-schema-" + randomUUID(),
        version: "2.0.0",
        type: "AnoncredSchemaV1",
        schema: schema,
        author: did,
        tags: ["automation"],
        description: "Anoncred Schema for TS"
      }

      const newSchema = await cloudAgentApi.post(
        "schema-registry/schemas",
        credentialSchemaInput
      )

      const newSchemaGuid = newSchema.data.guid

      const definitionInput: CredentialDefinitionInput = {
        name: "automation-anoncred-definition-" + randomUUID(),
        version: "1.0.0",
        tag: "automation-test",
        author: did,
        schemaId: `${this.agent.url}schema-registry/schemas/${newSchemaGuid}/schema`,
        signatureType: "CL",
        supportRevocation: false,
        description: "Test Automation Auto-Generated TS"
      }

      const credentialDefinition = await cloudAgentApi.post<CredentialDefinitionResponse>(
        "credential-definition-registry/definitions/did-url",
        definitionInput
      )

      return {
        guid: credentialDefinition.data.guid,
        id: credentialDefinition.data.longId
      }
    }
  }
}

export const cloudAgentApi = axios.create({
  baseURL: `${Setup.agent.url}/`, // requires ending with forward slash
  insecureHTTPParser: true,
  timeout: 60000,
  headers: {
    Accept: "application/json,application/xml,application/ld+json,profile=https://w3id.org/did-resolution",
    APIKEY: Setup.agent.apikey
  }
})
