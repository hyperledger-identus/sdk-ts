
import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { OfferCredential, OutOfBandInvitation } from "../../plugins/internal/didcomm";
import { AgentContext } from "../Context";

/**
 * Arguments for creating an out-of-band (OOB) offer invitation
 */
export interface Args {
    /** Optional base URL for the invitation (deprecated, not used in current implementation) */
    baseUrl?: string;
    /** The DID of the issuer creating the offer */
    from: Domain.DID;
    /** Optional goal code for the invitation (defaults to "issue-vc") */
    goalCode?: string;
    /** Optional human-readable goal description (defaults to "Issue Credential") */
    goal?: string;
    /** Optional array of accepted protocols (defaults to ["didcomm/v2"]) */
    accept?: string[];
    /** The credential offer to include in the invitation */
    offer: OfferCredential;
}

/**
 * Task class for creating out-of-band (OOB) credential offer invitations.
 * 
 * This class generates a base64-encoded JSON string representing an OOB invitation
 * that includes a credential offer attachment. The invitation can be shared with
 * potential credential holders to initiate the credential issuance flow.
 */
export class CreateOOBOffer extends Task<string, Args> {
    /**
     * Gets the body configuration for the out-of-band invitation.
     * 
     * @returns The OOB invitation body with goal code, goal description, and accepted protocols
     */
    get oobBody() {
        return {
            goal_code: this.args.goalCode ?? "issue-vc",
            goal: this.args.goal ?? "Issue Credential",
            accept: this.args.accept ?? ["didcomm/v2"],
        }
    }

    /**
     * Gets the attachments for the out-of-band invitation.
     * 
     * @returns Array containing the credential offer as an attachment descriptor
     */
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

    /**
     * Executes the task to create an out-of-band credential offer invitation.
     * 
     * This method validates the provided offer, generates a unique invitation ID,
     * creates the OOB invitation structure, and returns it as a base64-encoded string.
     * 
     * @param _ctx - The agent context (not used in current implementation)
     * @returns A Promise that resolves to a base64-encoded OOB invitation string
     * @throws {Error} When the provided offer is invalid or not an instance of OfferCredential
     */
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

