import { Plugin, type Plugins } from "../..";
import * as Types from "./types";
import { AnoncredsLoader } from "@hyperledger/identus-anoncreds";
import { CredentialIssue } from "./CredentialIssue";
import { CredentialOffer } from "./CredentialOffer";
import { PresentationRequest } from "./PresentationRequest";
import { PresentationVerify } from "./PresentationVerify";
import * as Domain from "@hyperledger/identus-domain";
import { AnonCredsCredential } from "./utils";

export type Modules = { Anoncreds: AnoncredsLoader; };
export type Context = Plugins.Context<Modules>;

export const plugin = new Plugin()
  .addModule("Anoncreds", new AnoncredsLoader())
  .register(Types.CREDENTIAL_ISSUE, CredentialIssue)
  .register(Types.CREDENTIAL_OFFER, CredentialOffer)
  .register(Types.PRESENTATION, PresentationVerify)
  .register(Types.PRESENTATION_REQUEST, PresentationRequest);

// Register AnonCreds credential restore factory.
// Executes at module evaluation time when the plugin is imported.
// Allows the storage layer (CredentialRepository) to reconstruct
// AnonCreds credentials without a direct import of this plugin.
Domain.Credential.registerRestoreFactory(
  Domain.AnonCredsRecoveryId,
  (dataJson: string) => {
    const json = JSON.parse(dataJson);
    return new AnonCredsCredential(json, json.revoked ?? false);
  }
);
