import { Plugin } from "../../../plugins";
import { OEA } from "./types";
import * as jwt from "./jwt";
import * as sdjwt from "./sdjwt";
import { HandlePresentation } from "./tasks/HandlePresentation";
import { HandleRevocation } from "./tasks/HandleRevocation";

const plugin = new Plugin();

// message handlers
plugin.register(OEA.ProtocolIds.Presentation, HandlePresentation);
plugin.register(OEA.ProtocolIds.PrismRevocation, HandleRevocation);
// plugin.register(OEA.ProtocolType.DidcommProposePresentation, HandlePresentation);
// plugin.register(OEA.ProtocolType.DidcommRequestPresentation, HandlePresentationRequest);

// jwt handlers
plugin.register(`credential-issue/${OEA.PRISM_JWT}`, jwt.CredentialIssue);
plugin.register(`credential-offer/${OEA.PRISM_JWT}`, jwt.CredentialOffer);
plugin.register(`presentation-request/${OEA.PRISM_JWT}`, jwt.PresentationRequest);

// sdjwt handlers
plugin.register(`credential-issue/${OEA.PRISM_SDJWT}`, sdjwt.CredentialIssue);
plugin.register(`credential-offer/${OEA.PRISM_SDJWT}`, sdjwt.CredentialOffer);
plugin.register(`presentation-request/${OEA.PRISM_SDJWT}`, sdjwt.PresentationRequest);

export default plugin;
