import * as SDK from "@hyperledger/identus-sdk"
import type { DIDDocument, JWK } from "@hyperledger/identus-domain"
import { cloudAgentApi } from "../configuration/Setup"
import { type DIDDocument as CloudDIDDocument, type DIDResolutionResult } from "@hyperledger/identus-cloud-agent-client"

export class PrismShortFormDIDResolver implements SDK.Domain.DIDResolver {
  method: string = "prism"

  async resolve(didString: string): Promise<DIDDocument> {
    const response = await cloudAgentApi.get<DIDResolutionResult>(`dids/${didString}`, {
      headers: {
        Accept: "*/*"
      }
    })
    if (response.status != 200) {
      throw new Error("Failed to fetch data")
    }
    const data = response.data
    const didDocument: CloudDIDDocument = data.didDocument

    const servicesProperty = new SDK.Domain.DIDDocument.Services(
      didDocument.service.map((service) => {
        return new SDK.Domain.DIDDocument.Service(
          service.id,
          service.type,
          new SDK.Domain.DIDDocument.ServiceEndpoint(
            service.serviceEndpoint as string
          )
        )
      })
    )

    const verificationMethodsProperty = new SDK.Domain.DIDDocument.VerificationMethods(
      didDocument.verificationMethod.map((verificationMethod) => {
        return new SDK.Domain.DIDDocument.VerificationMethod(
          verificationMethod.id,
          verificationMethod.controller,
          verificationMethod.type as DIDDocument.VerificationMethod.Type,
          verificationMethod.publicKeyJwk as unknown as JWK
        )
      })
    )

    const authenticate: DIDDocument.Authentication[] = []
    const assertion: DIDDocument.AssertionMethod[] = []

    for (const verificationMethod of didDocument.verificationMethod) {
      const isAssertion = didDocument.assertionMethod.find((method) => method === verificationMethod.id)
      if (isAssertion) {
        assertion.push(
          new SDK.Domain.DIDDocument.AssertionMethod(
            [isAssertion],
            [verificationMethodsProperty.values.find((e) => e.id == verificationMethod.id)]
          )
        )
      }
      const isAuthentication = didDocument.authentication.find((method) => method === verificationMethod.id)
      if (isAuthentication) {
        authenticate.push(
          new SDK.Domain.DIDDocument.Authentication(
            [isAuthentication],
            [verificationMethodsProperty.values.find((e) => e.id == verificationMethod.id)]
          )
        )
      }
    }

    const coreProperties: DIDDocument.CoreProperty[] = []
    coreProperties.push(...authenticate)
    coreProperties.push(...assertion)
    coreProperties.push(servicesProperty)
    coreProperties.push(verificationMethodsProperty)

    const resolved = new SDK.Domain.DIDDocument(
      SDK.Domain.DID.fromString(didString),
      coreProperties
    )

    return resolved
  }
}
