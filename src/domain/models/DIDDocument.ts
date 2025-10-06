import { isString } from "../../utils";
import { DID } from "./DID";
import { JWK } from "./keyManagement";

export class DIDDocument {
  constructor(
    public id: DID,
    public coreProperties: Array<DIDDocument.CoreProperty>
  ) { }

  get services(): DIDDocument.Service[] {
    return this.coreProperties.reduce<DIDDocument.Service[]>((acc, prop) => {
      return prop instanceof DIDDocument.Services ? acc.concat(...prop.values) : acc;
    }, []);
  }

  get authentication(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.Authentication
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }

  get capabilityInvocation(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.CapabilityInvocation
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }
  get capabilityDelegation(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.CapabilityDelegation
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }
  get assertionMethod(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.AssertionMethod
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }
  get keyAgreement(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.KeyAgreement
        ? acc.concat(...prop.verificationMethods)
        : acc;
    }, []);
  }

  get verificationMethods(): DIDDocument.VerificationMethod[] {
    return this.coreProperties.reduce<DIDDocument.VerificationMethod[]>((acc, prop) => {
      return prop instanceof DIDDocument.VerificationMethods ? acc.concat(...prop.values) : acc;
    }, []);
  }



  static fromJSON(didDocumentJson: any): DIDDocument {

    const authentication: DIDDocument.Authentication = new DIDDocument.Authentication();
    const capabilityInvocation: DIDDocument.CapabilityDelegation = new DIDDocument.CapabilityDelegation();
    const capabilityDelegation: DIDDocument.CapabilityDelegation = new DIDDocument.CapabilityDelegation();
    const assertionMethod: DIDDocument.AssertionMethod = new DIDDocument.AssertionMethod();
    const keyAgreement: DIDDocument.KeyAgreement = new DIDDocument.KeyAgreement();

    for (const method of didDocumentJson.authentication ?? []) {
      if (typeof method === "string") {
        if (method.startsWith("#")) { // TODO the verificationMethod may or may not use the canonical name
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { authentication.add(tmp); }
        } else {
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { authentication.add(tmp); }
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        authentication.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    };

    for (const method of didDocumentJson.capabilityInvocation ?? []) {
      if (typeof method === "string") {
        if (method.startsWith("#")) { // TODO the verificationMethod may or may not use the canonical name
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { capabilityInvocation.add(tmp); }
        } else {
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { capabilityInvocation.add(tmp); }
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        capabilityInvocation.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    };

    for (const method of didDocumentJson.capabilityDelegation ?? []) {
      if (typeof method === "string") {
        if (method.startsWith("#")) { // TODO the verificationMethod may or may not use the canonical name
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { capabilityDelegation.add(tmp); }
        } else {
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { capabilityDelegation.add(tmp); }
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        capabilityDelegation.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    };

    for (const method of didDocumentJson.assertionMethod ?? []) {
      if (typeof method === "string") {
        if (method.startsWith("#")) { // TODO the verificationMethod may or may not use the canonical name
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { assertionMethod.add(tmp); }
        } else {
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { assertionMethod.add(tmp); }
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        assertionMethod.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    };

    for (const method of didDocumentJson.keyAgreement ?? []) {
      if (typeof method === "string") {
        if (method.startsWith("#")) { // TODO the verificationMethod may or may not use the canonical name
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { keyAgreement.add(tmp); }
        } else {
          const tmp = didDocumentJson.verificationMethod.find((m: DIDDocument.VerificationMethod) => m.id === method);
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          if (tmp) { keyAgreement.add(tmp); }
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        keyAgreement.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    };

    const servicesProperty =
      new DIDDocument.Services(didDocumentJson.service);
    const verificationMethodsProperty =
      new DIDDocument.VerificationMethods(didDocumentJson.verificationMethod);


    const coreProperties: DIDDocument.CoreProperty[] = [];

    coreProperties.push(authentication);
    coreProperties.push(capabilityInvocation);
    coreProperties.push(capabilityDelegation);
    coreProperties.push(assertionMethod);
    coreProperties.push(keyAgreement);
    coreProperties.push(servicesProperty);
    coreProperties.push(verificationMethodsProperty);

    return new DIDDocument(DID.fromString(didDocumentJson.id), coreProperties);
  };


  static cloneWithNewDID(doc: DIDDocument, newDid: DID): DIDDocument {
    const newCoreProperties: DIDDocument.CoreProperty[] = [];
    for (const prop of doc.coreProperties) {
      if (prop instanceof DIDDocument.Service) {
        const newService = new DIDDocument.Service(
          DID.replaceDID(prop.id, newDid),
          prop.type,
          prop.serviceEndpoint
        );
        newCoreProperties.push(newService);
      } else if (prop instanceof DIDDocument.Services) {
        const newServices = Array.from(prop.values)
          .map(s => new DIDDocument.Service(
            DID.replaceDID(s.id, newDid),
            s.type,
            s.serviceEndpoint
          ));
        newCoreProperties.push(new DIDDocument.Services(newServices));
      } else if (prop instanceof DIDDocument.AlsoKnownAs) {
        const newAlsoKnownAs = new DIDDocument.AlsoKnownAs(Array.from(prop.values));
        newCoreProperties.push(newAlsoKnownAs);
      } else if (prop instanceof DIDDocument.Controller) {
        const newController = new DIDDocument.Controller(Array.from(prop.values));
        newCoreProperties.push(newController);
      } else if (prop instanceof DIDDocument.Authentication) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      } else if (prop instanceof DIDDocument.AssertionMethod) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      } else if (prop instanceof DIDDocument.KeyAgreement) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      } else if (prop instanceof DIDDocument.CapabilityInvocation) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      } else if (prop instanceof DIDDocument.CapabilityDelegation) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      } else if (prop instanceof DIDDocument.VerificationMethods) {
        newCoreProperties.push(prop.cloneWithNewDID(newDid))
      }
    }
    return new DIDDocument(newDid, newCoreProperties);
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
    ) { }

    public cloneWithNewId(did: DID): VerificationMethod {
      console.log("cloneWithNewId")

      if (this.publicKeyJwk) {
        const newKid = (this.publicKeyJwk.kid) ? DID.replaceDID(this.publicKeyJwk.kid, did) : this.publicKeyJwk.kid;
        const newPublicKeyJwk = structuredClone(this.publicKeyJwk);
        newPublicKeyJwk.kid = newKid;
        const tmp = new VerificationMethod(
          DID.replaceDID(this.id, did),
          this.controller,
          this.type,
          newPublicKeyJwk,
          this.publicKeyMultibase,
        );
        console.log(tmp);
        return tmp;
      }
      else {
        return new VerificationMethod(
          DID.replaceDID(this.id, did),
          this.controller,
          this.type,
          undefined,
          this.publicKeyMultibase,
        );
      }
    }
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
    constructor(public values: Array<string>) { }
  }

  export class Controller {
    constructor(public values: Array<DID>) { }
  }

  export class VerificationMethods {
    constructor(
      public values: Array<VerificationMethod> = []
    ) { }
    cloneWithNewDID(did: DID): VerificationMethods {
      const newValues = this.values.map(a => a.cloneWithNewId(did));
      return new VerificationMethods(newValues);
    }
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
    ) { }
  }

  export class Services {
    constructor(public values: Array<Service> = []) { }
  }

  // IMPROVEMENT: make this class parametric on VerificationMethod and make the methods 'add' more type safety
  class VerificationMethodGroup {
    constructor(
      public urls: Array<string> = [],
      public verificationMethods: Array<VerificationMethod> = [],
    ) { }

    add(method: VerificationMethod) {
      this.urls.push(method.id);
      this.verificationMethods.push(method);
    }

    cloneWithNewDID(did: DID): VerificationMethodGroup {
      const newURLs = Array.from(this.urls).map(aux => DID.replaceDID(aux, did))
      const newVerificationMethods = Array.from(this.verificationMethods).map(vm => {
        return vm.cloneWithNewId(did);
      })
      return new VerificationMethodGroup(newURLs, newVerificationMethods)
    }
  }

  export class Authentication extends VerificationMethodGroup {
    cloneWithNewDID(did: DID): Authentication {
      const tmp = super.cloneWithNewDID(did)
      return Object.assign(new Authentication(), tmp)
    }
  }
  export class AssertionMethod extends VerificationMethodGroup {
    cloneWithNewDID(did: DID): Authentication {
      const tmp = super.cloneWithNewDID(did)
      return Object.assign(new AssertionMethod(), tmp)
    }
  }
  export class KeyAgreement extends VerificationMethodGroup {
    cloneWithNewDID(did: DID): Authentication {
      const tmp = super.cloneWithNewDID(did)
      return Object.assign(new KeyAgreement(), tmp)
    }
  }
  export class CapabilityInvocation extends VerificationMethodGroup {
    cloneWithNewDID(did: DID): Authentication {
      const tmp = super.cloneWithNewDID(did)
      return Object.assign(new CapabilityInvocation(), tmp)
    }
  }
  export class CapabilityDelegation extends VerificationMethodGroup {
    cloneWithNewDID(did: DID): Authentication {
      const tmp = super.cloneWithNewDID(did)
      return Object.assign(new CapabilityDelegation(), tmp)
    }
  }
}
