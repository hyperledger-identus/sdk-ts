import SDK from "@hyperledger/identus-sdk"
import { axiosInstance } from "../configuration/CloudAgentConfiguration"
import { DIDDocument, DIDResolutionResult } from "@hyperledger/identus-cloud-agent-client"

export class PrismShortFormDIDResolver implements SDK.Domain.DIDResolver {
  method: string = "prism"

  async resolve(didString: string): Promise<SDK.Domain.DIDDocument> {
    const response = await axiosInstance.get<DIDResolutionResult>(`dids/${didString}`, {
      headers: {
        Accept: "*/*"
      }
    })
    if (response.status != 200) {
      throw new Error("Failed to fetch data")
    }
    const data = response.data
    const didDocument: DIDDocument = data.didDocument

    const servicesProperty = new SDK.Domain.Services(
      didDocument.service.map((service) => {
        return new SDK.Domain.Service(
          service.id,
          service.type,
          new SDK.Domain.ServiceEndpoint(
            service.serviceEndpoint as any
          )
        )
      })
    )

    const verificationMethodsProperty = new SDK.Domain.VerificationMethods(
      didDocument.verificationMethod.map((verificationMethod) => {
        return new SDK.Domain.VerificationMethod(
          verificationMethod.id,
          verificationMethod.controller,
          verificationMethod.type as any,
          verificationMethod.publicKeyJwk as any
        )
      })
    )

    const authenticate: SDK.Domain.Authentication[] = []
    const assertion: SDK.Domain.AssertionMethod[] = []

    for (const verificationMethod of didDocument.verificationMethod) {
      const isAssertion = didDocument.assertionMethod.find((method) => method === verificationMethod.id)
      if (isAssertion) {
        assertion.push(new SDK.Domain.AssertionMethod([isAssertion], [verificationMethodsProperty.values.find((e) => e.id == verificationMethod.id)]))
      }
      const isAuthentication = didDocument.authentication.find((method) => method === verificationMethod.id)
      if (isAuthentication) {
        authenticate.push(new SDK.Domain.Authentication([isAuthentication], [verificationMethodsProperty.values.find((e) => e.id == verificationMethod.id)]))
      }
    }

    const coreProperties: SDK.Domain.DIDDocumentCoreProperty[] = []
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
