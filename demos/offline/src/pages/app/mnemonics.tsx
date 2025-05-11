'use client';

import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AgentRequire from "@/components/AgentRequire";
import { useDatabase, useApollo } from "@/hooks";

export default function Mnemonics() {
    const apollo = useApollo();
    const router = useRouter();
    const { setSeed } = useDatabase();
    const [mnemonics, setMnemonics] = useState<string[]>([]);

    useEffect(() => {
        setMnemonics(apollo.createRandomMnemonics());
    }, [apollo]);

    async function regenerateClick() {
        setMnemonics(apollo.createRandomMnemonics());
    }

    async function onNextClick() {
        if (mnemonics.length === 24) {
            const seed = apollo.createSeed(mnemonics as any);
            await setSeed(seed);
            router.push('/app/mediator');
        }
    }

    return (
        <AgentRequire>
            <Head>
                <title>Authentication | Identus Agent</title>
                <meta name="description" content="Manage your connections with other agents" />
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="max-w-md w-full space-y-6 p-6 bg-gray-900 rounded-lg">
                    <h1 className="text-center text-4xl font-bold text-white mb-6">
                        Your Seed
                    </h1>

                    <div className="rounded-lg border border-amber-500/30 bg-amber-900/20 p-4 mb-6">
                        <p className="text-amber-300 text-sm">
                            <span className="font-bold">Important:</span> These 24 words are the only way to recover your wallet. Write them down and keep them in a safe place.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {mnemonics.map((word, i) => (
                            <div
                                key={`mnemonicWord${i}`}
                                className="flex items-center p-3 rounded-lg bg-gray-800 border border-gray-700"
                            >
                                <span className="text-gray-400 mr-2 text-sm w-5">{i + 1}.</span>
                                <span className="text-white">{word}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex space-x-4 mt-8">
                        <button
                            className="flex-1 py-4 text-lg font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600"
                            onClick={regenerateClick}>
                            Regenerate
                        </button>
                        <button
                            className="flex-1 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                            onClick={onNextClick}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </AgentRequire>
    );
} 