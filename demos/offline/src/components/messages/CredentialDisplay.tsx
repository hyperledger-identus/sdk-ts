import SDK from "@hyperledger/identus-sdk";
import { Credential } from "../Credential";
import { MessageTitle } from "./MessageTitle";

export function CredentialDisplay(props: { message: SDK.Domain.Message }) {
    const { message } = props;
    const attachments = message.attachments.reduce<SDK.Domain.Credential[]>((acc, x) => {
        if (x.format === "prism/jwt") {
            return acc.concat(SDK.JWTCredential.fromJWS(x.payload));
        }

        if (x.format === "vc+sd-jwt") {
            return acc.concat(SDK.SDJWTCredential.fromJWS(x.payload));
        }

        try {
            const parsed = JSON.parse(x.payload);
            return acc.concat(parsed);
        }
        catch (err) { }

        return acc;
    }, []);

    const attachment = attachments.at(0)!;
    const parsed = { ...message };
    if (typeof parsed.body === "string") {
        (parsed as any).body = JSON.parse(parsed.body);
    }
    const format = message.attachments?.at(0)?.format;
    return (
        <div className="w-full mt-5 p-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="pt-6 px-6">
                <MessageTitle message={message} title={`Credential (${format})`} />
            </div>

            <div className="p-0  space-y-6">
                <Credential credential={attachment} />
            </div>
        </div>
    );
} 