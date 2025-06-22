import SDK from "@hyperledger/identus-sdk";
import {
  BasicMessage,
  ConnectionRequest,
  ConnectionResponse,
  CredentialRequest,
  CredentialDisplay,
  OfferCredential,
  DefaultMessage
} from "./messages";

export function Message({ message }: { message: SDK.Domain.Message }) {

  if (message.piuri === SDK.ProtocolType.DidcommBasicMessage) {
    return <BasicMessage message={message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommConnectionRequest) {
    return <ConnectionRequest message={message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommConnectionResponse) {
    return <ConnectionResponse message={message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommRequestCredential) {
    return <CredentialRequest message={message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommIssueCredential) {
    return <CredentialDisplay message={message} />;
  }

  if (message.piuri === SDK.ProtocolType.DidcommOfferCredential) {
    return <OfferCredential message={message} />;
  }

  return <DefaultMessage message={message} />;
}
