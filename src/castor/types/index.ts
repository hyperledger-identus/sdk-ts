import {
  VerificationMaterialAgreement,
  VerificationMaterialAuthentication,
} from "../../peer-did/types";

export type PeerDIDKeys = {
  signingKeys: VerificationMaterialAuthentication[];
  encryptionKeys: VerificationMaterialAgreement[];
};

