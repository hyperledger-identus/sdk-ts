import { type PeerDIDEncoded } from "@hyperledger/identus-domain";
export { PeerDID, type PeerDIDEncoded } from "@hyperledger/identus-domain";


/**
 * Provides functionality to transfrom peerDIDServices from our interfaces into DIDComm module ones
 */
export class PeerDIDService {
  readonly type: string;
  readonly serviceEndpoint: string;
  readonly routingKeys?: string[];
  readonly accept?: string[];

  constructor(
    type: string,
    serviceEndpoint: string,
    routingKeys?: string[],
    accept?: string[]
  ) {
    this.type = type;
    this.serviceEndpoint = serviceEndpoint;
    this.routingKeys = routingKeys;
    this.accept = accept;
  }

  static readonly DIDCommMessagingKey = "DIDCommMessaging";
  static readonly DIDCommMessagingEncodedKey = "dm";

  static readonly CodingKeys = {
    type: "t",
    serviceEndpoint: "s",
    routingKeys: "r",
    accept: "a",
  };

  encode(): PeerDIDEncoded {
    return {
      t: this.type.replace(
        PeerDIDService.DIDCommMessagingKey,
        PeerDIDService.DIDCommMessagingEncodedKey
      ),
      s: {
        uri: this.serviceEndpoint,
        r: this.routingKeys,
        a: this.accept,
      },
    };
  }

  static decode(encoded: PeerDIDEncoded): PeerDIDService {
    return new PeerDIDService(
      encoded.t === PeerDIDService.DIDCommMessagingEncodedKey ? PeerDIDService.DIDCommMessagingKey : encoded.t,
      encoded.s.uri,
      encoded.s.r,
      encoded.s.a
    );
  }
}
