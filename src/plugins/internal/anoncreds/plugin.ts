import { Plugin, Plugins } from "../..";
import * as Types from "./types";
import { AnoncredsLoader } from "./module/AnoncredsLoader";
import { CredentialIssue } from "./CredentialIssue";
import { CredentialOffer } from "./CredentialOffer";
import { PresentationRequest } from "./PresentationRequest";
import { PresentationVerify } from "./PresentationVerify";

export type Modules = { Anoncreds: AnoncredsLoader; };
export type Context = Plugins.Context<Modules>;

export const plugin = new Plugin()
  .addModule("Anoncreds", new AnoncredsLoader())
  .register(Types.CREDENTIAL_ISSUE, CredentialIssue)
  .register(Types.CREDENTIAL_OFFER, CredentialOffer)
  .register(Types.PRESENTATION, PresentationVerify)
  .register(Types.PRESENTATION_REQUEST, PresentationRequest);
