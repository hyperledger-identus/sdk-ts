import { Plugins } from "../../../../plugins";
import { Payload } from "@hyperledger/identus-domain";
import { JWTCredential } from "../../../../pollux/models/JWTVerifiableCredential";

interface Args {
  data: object | string | Buffer | Uint8Array;
}

export class CredentialIssue extends Plugins.Task<Args> {
  async run() {
    const jws = this.getJWS();
    // ?? use context.JWT
    const wrapCredential = JWTCredential.fromJWS(jws);
    return Payload.make("credential", wrapCredential);
  }

  private getJWS(): string {
    if (typeof this.args.data === "string") {
      return this.args.data;
    }

    if (
      this.args.data instanceof Buffer
      || this.args.data instanceof Uint8Array
    ) {
      return Buffer.from(this.args.data).toString();
    }

    return JSON.stringify(this.args.data);
  }
}
