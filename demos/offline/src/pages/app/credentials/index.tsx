import type React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SDK from "@hyperledger/identus-sdk";
import { useEffect, useState } from "react";
import { useAgent, useDatabase } from "@/hooks";
import { useRouter } from "next/router";
import AgentRequire from "@/components/AgentRequire";
import { base64 } from "multiformats/bases/base64";
import { Message } from "@/components/Message";
import { Credential } from "@/components/Credential";


function CredentialOffer({ message }: { message: SDK.Domain.Message }) {
    const { agent } = useAgent();
    if (!agent || agent.state !== SDK.Domain.Startable.State.RUNNING) {
        return <div className="p-4 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400">
            <p>Start the agent to process the Credential Offer</p>
        </div>
    }
    return <AgentRequire>
        <Message message={message} />
    </AgentRequire>
}

export default function CredentialsPage() {
    const { peerDID } = useAgent();
    const router = useRouter();
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
    const { db, pluto } = useDatabase();
    const [message, setMessage] = useState<SDK.Domain.Message | undefined>();

    useEffect(() => {
        if (router.isReady && peerDID) {
            const { oob } = router.query;
            if (oob) {
                const decoded = base64.baseDecode(oob as string);
                const message = SDK.Domain.Message.fromJson(Buffer.from(decoded).toString());
                const attachment = message.attachments.at(0)?.payload;
                setMessage(SDK.Domain.Message.fromJson({
                    ...attachment,
                    from: message.from,
                    to: peerDID,
                }));

                // Clean the URL after processing the message
                const { pathname } = router;
                router.replace(pathname, undefined, { shallow: true });
            }
        }
    }, [router.isReady, router.query, peerDID, router]);

    useEffect(() => {
        if (db) {
            pluto.getAllCredentials().then(setCredentials)
        }
    }, [db, pluto]);

    return (
        <Layout>
            <Head>
                <title>Credentials | Identus Agent</title>
                <meta name="description" content="Manage your verifiable credentials" />
            </Head>

            <PageHeader
                title="Credentials"
                description="Manage your verifiable credentials and digital attestations"
            />

            {message && <CredentialOffer message={message} />}

            {credentials.length > 0 ? (
                <div className="mt-5">
                    {credentials.map((credential, index) => (
                        <Credential key={index} credential={credential} />
                    ))}
                </div>
            ) : (
                <div className="mt-5 bg-background-light dark:bg-background-dark hadow-sm">
                    <div className="border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-lg mb-2">No credentials yet</p>
                            <p>Request credentials from issuers to start building your digital identity</p>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
} 