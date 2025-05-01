import { uuid } from "@stablelib/uuid";
import { AgentError, AttachmentDescriptor, JsonString } from "../../../../../domain";
import { PrismOnboardingInvitation } from "./PrismOnboardingInvitation";
import { ProtocolIds } from "../../types";

export interface OutOfBandInvitationBody {
  goal_code?: string;
  goal?: string;
  accept?: string[];
}

export class OutOfBandInvitation {
  public type = ProtocolIds.OOBInvitation;
  // piuri enables us to register a handler
  public piuri = ProtocolIds.OOBInvitation;

  constructor(
    public body: OutOfBandInvitationBody,
    public from: string,
    public id: string = uuid(),
    public attachments: AttachmentDescriptor[] = [],
    public expiration: number | null = null
  ) {}

  get isExpired() {
    if (this.expiration) {
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime > this.expiration;
    }
    return false;
  }

  /**
   * @deprecated
   * 
   * @param json 
   * @returns 
   */
  static parsePrismOnboardingInvitationFromJson(
    json: JsonString
  ): PrismOnboardingInvitation {
    const jsonObject = JSON.parse(json);
    if (!jsonObject.onboardEndpoint) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined PrismOnboardingInvitation onboardEndpoint"
      );
    }
    if (!jsonObject.type) {
      throw new AgentError.InvitationIsInvalidError(
        "Undefined PrismOnboardingInvitation type"
      );
    }
    const onboardingEndpoint = jsonObject.onboardEndpoint;
    const type = jsonObject.type;
    const from = jsonObject.from;

    return new PrismOnboardingInvitation(onboardingEndpoint, from, type);
  }
}
