import { isString } from "../../utils";
import { DID } from "./DID";
import { JWK } from "./keyManagement";

export class DIDDocument {
  constructor(
    public id: DID,
    public coreProperties: Array<DIDDocument.CoreProperty>
  ) {}

  get services(): DIDDocument.Service[] {
    return this.coreProperties.reduce<DIDDocument.Service[]>((acc, prop) => {
      return prop instanceof DIDDocument.Services ? acc.concat(...prop.values) : acc;
    }, []);
  }

  get verificationMethods(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.VerificationMethods ? acc.concat(...prop.values) : acc;
    }, []);
  }

  get authentication(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.Authentication
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }
}

export namespace DIDDocument {
  export type CoreProperty =
    | Service
    | AlsoKnownAs
    | Controller
    | VerificationMethods
    | Services
    | Authentication
    | AssertionMethod
    | KeyAgreement
    | CapabilityInvocation
    | CapabilityDelegation;

  export class VerificationMethod {
    constructor(
      public id: string,
      public controller: string,
      public type: VerificationMethod.Type,
      public publicKeyJwk?: JWK,
      public publicKeyMultibase?: string
    ) {}
  }

  export namespace VerificationMethod {
    export type Type =
      "JsonWebKey2020" |
      "Ed25519VerificationKey2018" |
      "Ed25519VerificationKey2020" |
      "X25519KeyAgreementKey2019" |
      "X25519KeyAgreementKey2020" |
      "EcdsaSecp256k1VerificationKey2019";
  }

  export class AlsoKnownAs {
    constructor(public values: Array<string>) {}
  }

  export class Controller {
    constructor(public values: Array<DID>) {}
  }

  export class VerificationMethods {
    constructor(
      public values: Array<VerificationMethod> = []
    ) {}
  }

  export class Service {
    public serviceEndpoint: ServiceEndpoint;

    constructor(
      public id: string,
      public type: Array<string>,
      endpoint: ServiceEndpoint | string,
    ) {
      this.serviceEndpoint = isString(endpoint) ? new ServiceEndpoint(endpoint) : endpoint;
    }

    get isDIDCommMessaging(): boolean {
      return this.type.includes("DIDCommMessaging");
    }
  }

  export class ServiceEndpoint {
    constructor(
      public uri: string,
      public accept: Array<string> = [],
      public routingKeys: Array<string> = []
    ) {}
  }

  export class Services {
    constructor(public values: Array<Service> = []) {}
  }

  class VerificationMethodGroup {
    constructor(
      public urls: Array<string> = [],
      public verificationMethods: Array<VerificationMethod> = [],
    ) {}

    add(method: VerificationMethod) {
      this.urls.push(method.id);
      this.verificationMethods.push(method);
    }
  }

  export class Authentication extends VerificationMethodGroup {}
  export class AssertionMethod extends VerificationMethodGroup {}
  export class KeyAgreement extends VerificationMethodGroup {}
  export class CapabilityInvocation extends VerificationMethodGroup {}
  export class CapabilityDelegation extends VerificationMethodGroup {}
}
