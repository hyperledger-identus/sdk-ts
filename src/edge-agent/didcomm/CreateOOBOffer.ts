
import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { OfferCredential, OutOfBandInvitation } from "../../plugins/internal/didcomm";
import { AgentContext } from "../Context";

/**
 * Asyncronously create and store a new peer did
 *
 * @async
 * @param {Service[]} services
 * @param {boolean} [updateMediator=false]
 * @returns {Promise<DID>}
 */

interface Args {
    baseUrl?: string,
    from: Domain.DID,
    goalCode?: string,
    goal?: string,
    accept?: string[],
    offer: OfferCredential
}

export class CreateOOBOffer extends Task<string, Args> {

    get oobBody() {
        return {
            goal_code: this.args.goalCode ?? "issue-vc",
            goal: this.args.goal ?? "Issue Credential",
            accept: this.args.accept ?? ["didcomm/v2"],
        }
    }

    get attachments() {
        return [
            new Domain.AttachmentDescriptor(
                {
                    json: this.args.offer.makeMessage()
                },
                "application/json",
            )
        ];
    }

    async run(_ctx: AgentContext): Promise<string> {
        if (!this.args.offer || !(this.args.offer instanceof OfferCredential)) {
            throw new Error("Invalid offer");
        }
        const oobId = uuid();
        const oob = new OutOfBandInvitation(
            this.oobBody,
            this.args.from.toString(),
            oobId,
            this.attachments
        );
        return Buffer.from(JSON.stringify(oob)).toString("base64")
    }
}
