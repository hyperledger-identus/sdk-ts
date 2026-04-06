import { type JsonObj } from "../../../utils";
import { type Claims } from "../anoncreds";
import { type CredentialType } from "@hyperledger/identus-domain";

// Open Enterprise Agent specific
export namespace OEA {
  export const ProtocolIds = {
    ConnectionRequest: "https://atalaprism.io/mercury/connections/1.0/request",
    ConnectionResponse: "https://atalaprism.io/mercury/connections/1.0/response",
    ProposePresentation: "https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation",
    RequestPresentation: "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation",
    Presentation: "https://didcomm.atalaprism.io/present-proof/3.0/presentation",
    PrismOnboarding: "https://atalaprism.io/did-request",
    PrismRevocation: "https://atalaprism.io/revocation_notification/1.0/revoke",
  } as const;

  export const PRISM_JWT = "prism/jwt";
  /** W3C standard credential format identifier for JWT credentials */
  export const JWT = "jwt";
  export const PRISM_SDJWT = "vc+sd-jwt";

  /**
   * Normalizes a credential format string to the canonical format.
   * Treats "jwt" and "prism/jwt" as equivalent (returns "prism/jwt" for backward compat).
   * @param format - The credential format string to normalize
   * @returns The canonical format string
   */
  export function normalizeCredentialFormat(format: string): string {
    if (format === JWT) {
      return PRISM_JWT;
    }
    return format;
  }

  export interface CredentialOffer {
    options: {
      challenge: string;
      domain: string;
    };
  }

  export enum DescriptorItemFormat {
    JWT_VC = 'jwt_vc',
    JWT_VP = 'jwt_vp',
    SDJWT = 'sdjwt',
  }

  export type JWTPresentationClaims = {
    schema?: string;
    issuer?: string;
    claims: JsonObj<InputFieldFilter>;
  };

  export type SDJWTPresentationClaims = {
    schema?: string;
    issuer?: string;
    claims: JsonObj<InputFieldFilter>;
  };

  export type SDJWTPresentationSubmission = {
    disclosures: any[],
    protected: string,
    payload: string,
    signature: string;
  };

  export interface PresentationSubmission {
    presentation_submission: {
      id: string;
      definition_id: string;
      descriptor_map: DescriptorItem[];
    };
    verifiablePresentation: string[];
  }

  export interface DescriptorItem {
    id: string;
    format: string;
    path: string;
    path_nested?: DescriptorItem;
  }

  export interface PresentationRequest {
    options: {
      challenge: string;
      domain: string;
    };
    presentation_definition: {
      id: string;
      input_descriptors: InputDescriptor[];
      format?: DefinitionFormat;
    };
  }

  export type DefinitionFormat = {
    jwt?: {
      alg: string[];
    },
    sdjwt?: {
      alg: string[];
    },
  };

  export type InputDescriptor = {
    id: string,
    constraints: InputConstraints,
    name?: string,
    purpose?: string,
    format?: DefinitionFormat,
  };

  export type InputFieldFilter = {
    type: string,
    pattern?: string,
    enum?: PredicateType[],
    const?: PredicateType[],
    value?: PredicateType,
  };

  export type PredicateType = string | number;

  export type InputField = {
    path: string[],
    id?: string,
    purpose?: string,
    name?: string,
    filter?: InputFieldFilter,
    optional?: boolean;
  };

  export type InputConstraints = {
    fields: InputField[],
    limit_disclosure: InputLimitDisclosure;
  };

  export enum InputLimitDisclosure {
    REQUIRED = "required",
    PREFERRED = "preferred"
  }

}




export type PresentationClaims<T extends CredentialType = CredentialType.JWT> =
  T extends CredentialType.JWT ? OEA.JWTPresentationClaims :
  T extends CredentialType.SDJWT ? OEA.SDJWTPresentationClaims :
  T extends CredentialType.AnonCreds ? Claims :
  never;
// ODOT

export enum JWT_ALG {
  ES256K = "ES256K",
  EdDSA = "EdDSA",
  unknown = 'unknown'
}

export { CredentialType } from "@hyperledger/identus-domain";

export type W3CVerifiableCredential = {
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  type: ["VerifiableCredential"],
  issuer: string,
  issuanceDate: string,
  issued?: string,
  credentialSubject: Record<string, any>,
  expirationDate?: string,
  evidence?: {
    id: string,
    type: string;
  },
  refreshService?: {
    id: string,
    type: string;
  },
  termsOfUse?: {
    id: string,
    type: string;
  },
  validFrom?: {
    id: string,
    type: string;
  },
  validUntil?: {
    id: string,
    type: string;
  },
  credentialSchema?: {
    id: string,
    type: string;
  },
  credentialStatus?: {
    id: string;
    type: string;
    statusPurpose: 'Revocation' | 'Suspension';
    statusListIndex: number;
    statusListCredential: string;
  };
};


export type W3CVerifiablePresentation = {
  "@context": [
    "https://www.w3.org/2018/presentations/v1"
  ],
  type: [
    "VerifiablePresentation"
  ],
  verifiableCredential: string[],
  proof?: W3CVerifiablePresentationProof;
};

export type W3CVerifiablePresentationProof = {
  challenge: string,
  domain: string;
};