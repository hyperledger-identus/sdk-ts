import { isString } from "../utils/guards";
import { DID } from "./DID";
import { type JWK } from "./keyManagement";

export enum VerificationMaterialFormatDID {
  JWK = "jwk",
}

export interface VerificationMethodTypeDID {
  value: string;
}

export class BaseVerificationMethod implements VerificationMethodTypeDID {
  constructor(public value: DIDDocument.VerificationMethod.Type) { }
}

export enum Numalgo2Prefix {
  authentication = "V",
  keyAgreement = "E",
  service = "S",
}

export type OctetPublicKey = {
  kty: "OKP";
  crv: string;
  x: string;
};

export class VerificationMethodTypeAgreement extends BaseVerificationMethod {
  static JSON_WEB_KEY_2020 = new VerificationMethodTypeAgreement(
    "JsonWebKey2020"
  );
  static X25519_KEY_AGREEMENT_KEY_2019 = new VerificationMethodTypeAgreement(
    "X25519KeyAgreementKey2019"

  );
  static X25519_KEY_AGREEMENT_KEY_2020 = new VerificationMethodTypeAgreement(
    "X25519KeyAgreementKey2020"
  );
}

export class VerificationMethodTypeAuthentication extends BaseVerificationMethod {
  static JSON_WEB_KEY_2020 = new VerificationMethodTypeAuthentication(
    "JsonWebKey2020"
  );
  static ED25519_KEY_AGREEMENT_KEY_2018 =
    new VerificationMethodTypeAuthentication(
      "Ed25519VerificationKey2018"
    );
  static ED25519_KEY_AGREEMENT_KEY_2020 =
    new VerificationMethodTypeAuthentication(
      "Ed25519VerificationKey2020"
    );
}

export type VerificationMaterial =
  | VerificationMaterialAgreement
  | VerificationMaterialAuthentication;

export interface VerificationMethodTypePeerDIDWithAgreement
  extends VerificationMethodTypeDID {
  agreement: VerificationMethodTypeAgreement;
}

export interface VerificationMethodTypePeerDIDWithAuthentication
  extends VerificationMethodTypeDID {
  authentication: VerificationMethodTypeAuthentication;
}

export type VerificationMaterialPeerDIDType = 1;
export interface VerificationMaterialPeerDID {
  keyType: VerificationMethodTypeDID;
  value: string;
}

export class VerificationMaterialPeerDIDWithAgreement
  implements VerificationMaterialPeerDID {
  constructor(
    public keyType: VerificationMethodTypeDID,
    public value: string,
    public agreement: VerificationMaterialAgreement
  ) { }
}

export class VerificationMaterialPeerDIDWithAuthentication
  implements VerificationMaterialPeerDID {
  constructor(
    public keyType: VerificationMethodTypeDID,
    public value: string,
    public authentication: VerificationMaterialAuthentication
  ) { }
}

export class VerificationMaterialAgreement
  implements VerificationMaterialPeerDIDWithAgreement {
  public readonly format: VerificationMaterialFormatDID;
  public readonly value: string;
  public readonly type: VerificationMethodTypeAgreement;

  constructor(
    value: string,
    type: VerificationMethodTypeAgreement,
    format: VerificationMaterialFormatDID
  ) {
    this.format = format;
    this.value = value;
    this.type = type;
  }

  get keyType(): VerificationMethodTypeDID {
    return this.type;
  }

  get agreement(): VerificationMaterialAgreement {
    return this;
  }
}

export class VerificationMaterialAuthentication
  implements VerificationMaterialPeerDIDWithAuthentication {
  public readonly format: VerificationMaterialFormatDID;
  public readonly value: string;
  public readonly type: VerificationMethodTypeAuthentication;

  constructor(
    value: string,
    type: VerificationMethodTypeAuthentication,
    format: VerificationMaterialFormatDID
  ) {
    this.format = format;
    this.value = value;
    this.type = type;
  }

  get keyType(): VerificationMethodTypeDID {
    return this.type;
  }

  get authentication(): VerificationMaterialAuthentication {
    return this;
  }
}



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



  private static parseVerificationMethodGroup(
    methodsFromJson: any[] = [],
    availableMethods: any[] = [],
    targetGroup: { add(method: DIDDocument.VerificationMethod): void }
  ): void {
    for (const method of methodsFromJson || []) {
      if (typeof method === "string") {
        const tmp = availableMethods?.find((m: any) => m.id === method);
        if (tmp) {
          Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
          targetGroup.add(tmp);
        }
      } else if (typeof method === "object") {
        const tmp: DIDDocument.VerificationMethod = method; // TODO a bit unsafe
        Object.setPrototypeOf(tmp, DIDDocument.VerificationMethod.prototype);
        targetGroup.add(tmp);
      } else {
        throw new Error('Fail to decode VerificationMethod:' + method);
      }
    }
  }

  static fromJSON(didDocumentJson: any): DIDDocument {

    const authentication: DIDDocument.Authentication = new DIDDocument.Authentication();
    const capabilityInvocation: DIDDocument.CapabilityInvocation = new DIDDocument.CapabilityInvocation();
    const capabilityDelegation: DIDDocument.CapabilityDelegation = new DIDDocument.CapabilityDelegation();
    const assertionMethod: DIDDocument.AssertionMethod = new DIDDocument.AssertionMethod();
    const keyAgreement: DIDDocument.KeyAgreement = new DIDDocument.KeyAgreement();

    DIDDocument.parseVerificationMethodGroup(didDocumentJson.authentication, didDocumentJson.verificationMethod, authentication);
    DIDDocument.parseVerificationMethodGroup(didDocumentJson.capabilityInvocation, didDocumentJson.verificationMethod, capabilityInvocation);
    DIDDocument.parseVerificationMethodGroup(didDocumentJson.capabilityDelegation, didDocumentJson.verificationMethod, capabilityDelegation);
    DIDDocument.parseVerificationMethodGroup(didDocumentJson.assertionMethod, didDocumentJson.verificationMethod, assertionMethod);
    DIDDocument.parseVerificationMethodGroup(didDocumentJson.keyAgreement, didDocumentJson.verificationMethod, keyAgreement);

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
      if (this.publicKeyJwk) {
        const newKid = (this.publicKeyJwk.kid) ? DID.replaceDID(this.publicKeyJwk.kid, did) : this.publicKeyJwk.kid;
        const newPublicKeyJwk = structuredClone(this.publicKeyJwk);
        newPublicKeyJwk.kid = newKid;
        return new VerificationMethod(
          DID.replaceDID(this.id, did),
          this.controller,
          this.type,
          newPublicKeyJwk,
          this.publicKeyMultibase,
        );
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
