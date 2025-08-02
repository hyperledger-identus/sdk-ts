import { DID } from "../../../../../domain";

export enum InvitationTypes {
  OUTOFBAND,
  PRISM_ONBOARD,
}

export interface PrismOnboardingInvitationBody {
  type: string;
  onboardingEndpoint: string;
  from: string;
}

export class PrismOnboardingInvitation {
  public type: InvitationTypes = InvitationTypes.PRISM_ONBOARD;

  constructor(
    public onboardEndpoint: string,
    public from?: DID,
    type?: InvitationTypes
  ) {
    if (type) {
      this.type = type;
    }
  }
}
