import * as Domain from "../../domain";
import { JsonObj, asJsonObj, expect } from "../../utils";
import { Task } from "../../utils/tasks";
import { InvitationIsInvalidError } from "../../domain/models/errors/Agent";
import { CreatePeerDID } from "./CreatePeerDID";
import { AgentContext } from "../Context";
import { PrismOnboardingInvitation } from "../../plugins/internal/didcomm/protocols/invitation/PrismOnboardingInvitation";

/**
 * parse a prismOnboarding invitation
 */

interface Args {
  value: string | JsonObj;
}

export class ParsePrismInvitation extends Task<PrismOnboardingInvitation, Args> {
  async run(ctx: AgentContext) {
    const json = asJsonObj(this.args.value);
    const endpoint = expect(json.onboardEndpoint, new InvitationIsInvalidError("Undefined PrismOnboardingInvitation onboardEndpoint"));
    const type = expect(json.type, new InvitationIsInvalidError("Undefined PrismOnboardingInvitation type"));
    const from = json.from;
    const invitation = new PrismOnboardingInvitation(endpoint, from, type);
    const serviceEndpoint = new Domain.DIDDocument.ServiceEndpoint(invitation.onboardEndpoint, ["DIDCommMessaging"]);
    const service = new Domain.DIDDocument.Service("#didcomm-1", ["DIDCommMessaging"], serviceEndpoint);

    const did = await ctx.run(
      new CreatePeerDID({
        services: [service],
        updateMediator: true
      })
    );

    invitation.from = did;
    return invitation;
  }
}
