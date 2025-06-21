'use client';

import Head from "next/head";
import { useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useRouter } from "next/router";
import AgentRequire from "@/components/AgentRequire";
import { MEDIATOR_DID } from "@/config";
import { useDatabase } from "@/hooks";

export default function Mediator() {
    const { storeSettingsByKey } = useDatabase();
    const router = useRouter();
    const [mediatorDID, setMediatorDID] = useState<string | undefined>(process.env.NEXT_PUBLIC_MEDIATOR_DID);

    function onClick() {
        if (mediatorDID?.length) {
            const did = SDK.Domain.DID.fromString(mediatorDID);
            storeSettingsByKey(MEDIATOR_DID, did.toString());
            router.push('/app');
        }
    }

    return (
        <AgentRequire>
            <Head>
                <title>Authentication | Identus Agent</title>
                <meta name="description" content="Manage your connections with other agents" />
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="max-w-md w-full space-y-8 p-8 bg-background-light dark:bg-background-dark rounded-lg shadow-md">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                            Configure Mediator DID
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            Enter the Mediator Peer DID
                        </p>
                        <input className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" value={mediatorDID} onChange={(e) => setMediatorDID(e.target.value)} />
                    </div>
                    <button
                        className="my-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        onClick={onClick}>
                        Next
                    </button>
                </div>
            </div>
        </AgentRequire>
    );
} 