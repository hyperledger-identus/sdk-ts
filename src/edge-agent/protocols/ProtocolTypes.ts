export enum ProtocolType {
  // basicmessage
  DidcommBasicMessage = "https://didcomm.org/basicmessage/2.0/message",
  // report-problem
  ProblemReporting = "https://didcomm.org/report-problem/2.0/problem-report",
  // out-of-band
  Didcomminvitation = "https://didcomm.org/out-of-band/2.0/invitation",
  // coordinate-mediation
  DidcommMediationRequest = "https://didcomm.org/coordinate-mediation/2.0/mediate-request",
  DidcommMediationGrant = "https://didcomm.org/coordinate-mediation/2.0/mediate-grant",
  DidcommMediationDeny = "https://didcomm.org/coordinate-mediation/2.0/mediate-deny",
  DidcommMediationKeysUpdate = "https://didcomm.org/coordinate-mediation/2.0/keylist-update",
  // messagepickup
  PickupRequest = "https://didcomm.org/messagepickup/3.0/delivery-request",
  PickupDelivery = "https://didcomm.org/messagepickup/3.0/delivery",
  PickupStatus = "https://didcomm.org/messagepickup/3.0/status",
  PickupReceived = "https://didcomm.org/messagepickup/3.0/messages-received",
  LiveDeliveryChange = "https://didcomm.org/messagepickup/3.0/live-delivery-change",
  // issue-credential
  DidcommCredentialPreview = "https://didcomm.org/issue-credential/3.0/credential-preview",
  DidcommIssueCredential = "https://didcomm.org/issue-credential/3.0/issue-credential",
  DidcommOfferCredential = "https://didcomm.org/issue-credential/3.0/offer-credential",
  DidcommProposeCredential = "https://didcomm.org/issue-credential/3.0/propose-credential",
  DidcommRequestCredential = "https://didcomm.org/issue-credential/3.0/request-credential",
  // atalaprism
  PrismOnboarding = "https://atalaprism.io/did-request",
  PrismRevocation = "https://atalaprism.io/revocation_notification/1.0/revoke",
  DidcommConnectionRequest = "https://atalaprism.io/mercury/connections/1.0/request",
  DidcommConnectionResponse = "https://atalaprism.io/mercury/connections/1.0/response",
  DidcommProposePresentation = "https://didcomm.atalaprism.io/present-proof/3.0/propose-presentation",
  DidcommRequestPresentation = "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation",
  DidcommPresentation = "https://didcomm.atalaprism.io/present-proof/3.0/presentation",
}
