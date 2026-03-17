import {
  type VerificationMaterialAgreement,
  type VerificationMaterialAuthentication,
} from "../../peer-did/types";

export type PeerDIDKeys = {
  signingKeys: VerificationMaterialAuthentication[];
  encryptionKeys: VerificationMaterialAgreement[];
};

