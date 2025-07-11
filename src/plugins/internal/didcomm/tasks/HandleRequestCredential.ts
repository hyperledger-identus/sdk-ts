import { uuid } from '@stablelib/uuid';
import { SdJwtVcPayload, } from "@sd-jwt/sd-jwt-vc";
import type { DisclosureFrame } from '@sd-jwt/types';

import * as Domain from "../../../../domain";
import { Task } from "../../../../utils/tasks";
import { Plugins } from "../../../../plugins";
import { FindSigningKeys } from "../../../../edge-agent/didFunctions/FindDIDSigningKeys";
import { expect } from "../../../../utils";
import { base64 } from "multiformats/bases/base64";
import { ProtocolType } from '../../../../edge-agent/types';
import { IssueCredential } from '../protocols/issueCredential/IssueCredential';

type Claim = { name: string, value: string, type: string };
type ClaimArray = Claim[];
type Claims<A extends ClaimArray> = {
    [K in A[number]['name']]: Extract<A[number], { name: K }>['value']
}

type VC<A extends ClaimArray> = {
    vc: {
        "@context": string[],
        "type": string[],
        "issuanceDate": Date,
        "issuer": string,
        credentialSubject: Claims<A>
    }
}
type Payload<A extends ClaimArray> = VC<A> & SdJwtVcPayload



interface ArgsJWT<T extends ClaimArray> {
    issuerDID: Domain.DID,
    holderDID?: Domain.DID,
    message: Domain.Message;
    format: Domain.CredentialType.JWT;
    claims: T;
}

interface ArgsSDJWT<T extends ClaimArray> {
    issuerDID: Domain.DID,
    holderDID?: Domain.DID,
    message: Domain.Message;
    format: Domain.CredentialType.SDJWT;
    claims: T;
}

type Args<T extends ClaimArray = ClaimArray> = ArgsJWT<T> | ArgsSDJWT<T>;






/**
 * A Issuer will receive a Credential request froma  holder and must issue the credential
 */
export class HandleRequestCredential extends Task<IssueCredential, Args> {

    private async createJWT(
        ctx: Plugins.Context,
        claims: { name: string, value: string, type: string }[],
        issuerDID: Domain.DID,
        holderDID?: Domain.DID,
    ) {
        const credentialSubject = claims.reduce((all, { name, value, type }) => {
            if (type === 'number') {
                all[name] = Number(value);
            } else if (type === 'boolean') {
                all[name] = value === 'true';
            } else if (type === 'string') {
                all[name] = value;
            } else if (type === 'date') {
                all[name] = new Date(value);
            } else {
                all[name] = value;
            }
            return all;
        }, {} as any);

        const payload = {
            iss: issuerDID.toString(),
            iat: Date.now(),
            exp: Date.now() + 1000 * 60 * 60 * 24 * 365, //1 year
            nbf: Date.now(),
            jti: uuid(),
            vc: {
                credentialSubject
            },
            ...(holderDID ? { sub: holderDID.toString() } : {})
        }

        const result = await ctx.JWT.signWithDID(
            issuerDID,
            payload
        )

        return result;
    }

    private async createSDJWT<T extends ClaimArray>(
        ctx: Plugins.Context,
        claims: T,
        issuerDID: Domain.DID,
        holderDID?: Domain.DID
    ) {
        const payload = {
            iss: issuerDID.toString(),
            iat: Date.now(),
            exp: Date.now() + 1000 * 60 * 60 * 24 * 365, //1 year
            nbf: Date.now(),
            jti: uuid(),
            vct: issuerDID.toString(),
            ...claims.reduce((all, { name, value, type }) => {
                if (type === 'number') {
                    all[name] = Number(value);
                } else if (type === 'boolean') {
                    all[name] = value === 'true';
                } else if (type === 'string') {
                    all[name] = value;
                } else if (type === 'date') {
                    all[name] = new Date(value);
                } else {
                    all[name] = value;
                }
                return all;
            }, {} as Record<string, unknown>),
            ...(holderDID ? { sub: holderDID.toString() } : {})
        }

        const disclosureFrame: DisclosureFrame<typeof payload> = {
            _sd: Object.keys(payload)
                .filter((key) => !['iss', 'exp', 'nbf', 'vct'].includes(key))
                .reduce((all, key) => ([...all, key]), [] as any)
        }

        const result = await ctx.SDJWT.sign({
            issuerDID,
            payload,
            disclosureFrame: disclosureFrame
        })
        return result;
    }

    private async createCredential(
        ctx: Plugins.Context
    ) {
        const format = this.args.format;
        const claims = this.args.claims;
        const issuerDID = this.args.issuerDID;
        const holderDID = this.args.holderDID;

        if (format === Domain.CredentialType.JWT) {
            return {
                credential: await this.createJWT(ctx, claims, issuerDID, holderDID),
                type: Domain.CredentialType.JWT
            }
        }

        if (format === Domain.CredentialType.SDJWT) {
            return {
                credential: await this.createSDJWT(ctx, claims, issuerDID, holderDID),
                type: Domain.CredentialType.SDJWT
            }
        }

        throw new Error("Not implemented");
    }

    async run(ctx: Plugins.Context): Promise<IssueCredential> {
        const request = this.args.message;
        const {
            credential,
            type: credentialType
        } = await this.createCredential(ctx);
        const issueCredentialMessage = new Domain.Message(
            {
                comment: null,
                goal_code: null,
                more_available: null,
                replacement_id: null
            },
            uuid(),
            ProtocolType.DidcommIssueCredential,
            request.to,
            request.from,
            [
                new Domain.AttachmentDescriptor({
                    base64: base64.baseEncode(
                        Buffer.from(credential)
                    )
                },
                    "application/jwt",
                    uuid(),
                    undefined,
                    credentialType
                )
            ],
            request.thid
        )
        return IssueCredential.fromMessage(issueCredentialMessage)
    }

}