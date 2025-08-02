
import { uuid } from "@stablelib/uuid";
import * as Domain from "../../domain";
import { Task } from "../../utils/tasks";
import { OfferCredential, OutOfBandInvitation } from "../../plugins/internal/didcomm";
import { AgentContext } from "../Context";
import { RequestPresentation } from "../../plugins/internal/oea/protocols/RequestPresentation";

/**
 * Arguments for creating an out-of-band (OOB) presentation request invitation
 */
export interface Args {
    /** Optional base URL for the invitation (deprecated, not used in current implementation) */
    baseUrl?: string;
    /** The DID of the verifier creating the presentation request */
    from: Domain.DID;
    /** Optional goal code for the invitation (defaults to "verify-credential") */
    goalCode?: string;
    /** Optional human-readable goal description (defaults to "Request Presentation") */
    goal?: string;
    /** Optional array of accepted protocols (defaults to ["didcomm/v2"]) */
    accept?: string[];
    /** The presentation request to include in the invitation */
    presentationRequest: RequestPresentation;
}

/**
 * Task class for creating out-of-band (OOB) presentation request invitations.
 * 
 * This class generates a base64-encoded JSON string representing an OOB invitation
 * that includes a presentation request attachment. The invitation can be shared with
 * potential credential holders to initiate the presentation verification flow.
 */
export class CreateOOBPresentationRequest extends Task<string, Args> {
    /**
     * Gets the body configuration for the out-of-band invitation.
     * 
     * @returns The OOB invitation body with goal code, goal description, and accepted protocols
     */
    get oobBody() {
        return {
            goal_code: this.args.goalCode ?? "verify-credential",
            goal: this.args.goal ?? "Request Presentation",
            accept: this.args.accept ?? ["didcomm/v2"],
        }
    }

    /**
     * Gets the attachments for the out-of-band invitation.
     * 
     * @returns Array containing the presentation request as an attachment descriptor  
     */
    get attachments() {
        return [
            new Domain.AttachmentDescriptor(
                {
                    json: this.args.presentationRequest.makeMessage()
                },
                "application/json",
            )
        ];
    }

    /**
     * Executes the task to create an out-of-band presentation request invitation.
     * 
     * This method validates the provided presentation request, generates a unique invitation ID,
     * creates the OOB invitation structure, and returns it as a base64-encoded string.
     * 
     * @param _ctx - The agent context (not used in current implementation)
     * @returns A Promise that resolves to a base64-encoded OOB invitation string
     * @throws {Error} When the provided presentation request is invalid or not an instance of RequestPresentation
     */
    async run(_ctx: AgentContext): Promise<string> {
        if (!this.args.presentationRequest || !(this.args.presentationRequest instanceof RequestPresentation)) {
            throw new Error("Invalid presentation request");
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
