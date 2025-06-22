import SDK from "@hyperledger/identus-sdk";
import { useEffect, useState } from "react";
import { useAgent, useDatabase, usePermissions } from "@/hooks";
import { MessageTitle } from "./MessageTitle";
import { useMessageStatus } from "./utils";
import { useRouter } from "next/router";

export function CredentialRequest(props: { message: SDK.Domain.Message }) {
    const router = useRouter();
    const { message } = props;
    const { hasResponse, hasAnswered } = useMessageStatus(message);

    const { hasPermission } = usePermissions();
    const { getIssuanceFlow } = useDatabase();
    const { deleteMessage } = useAgent();
    const { agent, processRequestCredentialMessage } = useAgent();

    const [loaded, setLoaded] = useState(false);
    const [isAgent, setIsAgent] = useState(false);
    const [isAnswering, setIsAnswering] = useState(false);

    useEffect(() => {
        const load = async () => {
            const isAgentEnabled = await hasPermission('agent');
            setIsAgent(isAgentEnabled);
            setLoaded(true);
        }
        load();
    }, [hasPermission, getIssuanceFlow, message.attachments, message.thid]);


    useEffect(() => {
        if (hasAnswered) {
            setIsAnswering(false);
        }
    }, [hasAnswered])

    async function onAcceptCredentialRequest() {
        try {
            setIsAnswering(true);
            const requestCredentialMessage = SDK.RequestCredential.fromMessage(message);
            const issueCredentialMessage = await processRequestCredentialMessage(requestCredentialMessage);
            await agent?.send(issueCredentialMessage.makeMessage());
        } catch (err) {
            console.log("continue after err", err);
        }
    }

    async function onDeleteCredentialRequest() {
        await router.push('/app/messages');
        await deleteMessage(message);
    }

    if (!loaded) {
        return null
    }

    const format = message.attachments.at(0)?.format;

    if (isAgent) {
        return <div
            className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
        >
            <div>
                <MessageTitle message={message} title="Credential Request" />
                <p>By clicking accept you will be issuing a {format} credential to the requester</p>

                {hasResponse && (
                    <div className="mt-5 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        <p className="font-medium">Response already sent</p>
                        <p className="text-sm">You have already issued a credential for this request.</p>
                    </div>
                )}

                {!hasResponse && (
                    <>
                        {isAnswering && (
                            <div className="mt-5 flex items-center">
                                <div role="status">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <span className="ml-3 text-gray-600 dark:text-gray-400">Issuing credential...</span>
                            </div>
                        )}

                        {!isAnswering && (
                            <div className="mt-5 space-x-3">
                                <button
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                    style={{ width: 120 }}
                                    onClick={onAcceptCredentialRequest}>
                                    Accept
                                </button>
                                <button
                                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                    style={{ width: 120 }}
                                    onClick={onDeleteCredentialRequest}>
                                    Delete
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>;
    }

    return <div
        className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
        <div>
            <MessageTitle message={message} title="Credential Request" />
            <p>You requested the Credential through this Credential Request Message of type {format}</p>

            {hasResponse && (
                <div className="mt-5 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
                    <p className="font-medium">Credential received</p>
                    <p className="text-sm">The issuer has responded to your credential request.</p>
                </div>
            )}

            {!hasResponse && isAnswering && (
                <div className="mt-5 flex items-center">
                    <div role="status">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <span className="ml-3 text-gray-600 dark:text-gray-400">Waiting for credential...</span>
                </div>
            )}

            <div className="mt-5">
                <button
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    style={{ width: 120 }}
                    onClick={onDeleteCredentialRequest}>
                    Delete
                </button>
            </div>
        </div>
    </div>;
} 