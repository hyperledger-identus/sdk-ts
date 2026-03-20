export const ProtocolIds = {
  // basicmessage
  BasicMessage: "https://didcomm.org/basicmessage/2.0/message",
  // problem-report
  ProblemReporting: "https://didcomm.org/report-problem/2.0/problem-report",
  // out-of-band
  OOBInvitation: "https://didcomm.org/out-of-band/2.0/invitation",
  // coordinate-mediation
  MediationRequest: "https://didcomm.org/coordinate-mediation/2.0/mediate-request",
  MediationGrant: "https://didcomm.org/coordinate-mediation/2.0/mediate-grant",
  MediationDeny: "https://didcomm.org/coordinate-mediation/2.0/mediate-deny",
  MediationKeysUpdate: "https://didcomm.org/coordinate-mediation/2.0/keylist-update",
  // message-pickup
  PickupRequest: "https://didcomm.org/messagepickup/3.0/delivery-request",
  PickupDelivery: "https://didcomm.org/messagepickup/3.0/delivery",
  PickupStatus: "https://didcomm.org/messagepickup/3.0/status",
  PickupReceived: "https://didcomm.org/messagepickup/3.0/messages-received",
  LiveDeliveryChange: "https://didcomm.org/messagepickup/3.0/live-delivery-change",
  // issue-credential
  CredentialPreview: "https://didcomm.org/issue-credential/3.0/credential-preview",
  ProposeCredential: "https://didcomm.org/issue-credential/3.0/propose-credential",
  OfferCredential: "https://didcomm.org/issue-credential/3.0/offer-credential",
  RequestCredential: "https://didcomm.org/issue-credential/3.0/request-credential",
  IssueCredential: "https://didcomm.org/issue-credential/3.0/issue-credential",
} as const;
