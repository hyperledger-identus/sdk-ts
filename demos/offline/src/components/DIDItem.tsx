import { useState } from "react";
import SDK from "@hyperledger/identus-sdk";

import { useWallet } from "@meshsdk/react";
import { Transaction } from "@meshsdk/core";
import { BLOCKFROST_KEY_NAME, WALLET_NAME } from "@/config";
import { DIDAlias } from "@/utils";
import { ErrorAlert } from "./ErrorAlert";
import SelectWallet from "./SelectWallet";
import { useDatabase, useAgent } from "@/hooks";

export function DIDItem({ didItem, onUpdate }: { didItem: DIDAlias, onUpdate: (did: DIDAlias) => void }) {
    const { wallet, connected } = useWallet();
    const { db } = useDatabase();
    const { agent } = useAgent();
    const [error, setError] = useState<string | null>(null);
    const [isResolving, setIsResolving] = useState(false);
    const [resolvedData, setResolvedData] = useState<SDK.Domain.DIDDocument | null>(null);
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const didString = didItem.did.toString();
    const [publishing, setPublishing] = useState(false);

    async function checkTransactionConfirmation(txHash: string, project_id: string) {
        try {
            const response = await fetch(
                `https://cardano-mainnet.blockfrost.io/api/v0/txs/${txHash}`,
                {
                    headers: {
                        project_id
                    },
                }
            );
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    async function buildAndSubmitTransaction(metadataBody: any): Promise<string> {
        if (!wallet) throw new Error("No wallet connected");
        // Create a new transaction with the "initiator" set to the connected wallet
        const tx = new Transaction({ initiator: wallet })
            .sendLovelace(
                {
                    address: await wallet.getChangeAddress(),
                },
                "1000000"
            )
            .setMetadata(21325, metadataBody);
        // Build and sign
        const unsignedTx = await tx.build();
        const signedTx = await wallet.signTx(unsignedTx);
        const txHash = await wallet.submitTx(signedTx);
        return txHash;
    }


    function splitStringIntoChunks(input: Uint8Array, chunkSize = 64): Uint8Array[] {
        const buffer = Buffer.from(input);
        const chunks: Uint8Array[] = [];
        for (let i = 0; i < buffer.length; i += chunkSize) {
            chunks.push(
                Uint8Array.from(buffer.slice(i, i + chunkSize))
            );
        }
        return chunks;
    }

    async function onPublishClick() {
        if (!agent) {
            setError("Agent is not initialized");
            return;
        }
        try {
            const keys = didItem.keys;
            const castor = new SDK.Castor(new SDK.Apollo());
            const document = await agent.castor.resolveDID(didString);
            const signingKey = document.verificationMethods.find(key => key.id.includes("#master"));
            const projectId = await db?.getSettingsByKey(BLOCKFROST_KEY_NAME) ?? null;
            const walletId = await db?.getSettingsByKey(WALLET_NAME) ?? null;
            console.log("Publish clicked - Wallet ID:", walletId, "Project ID:", projectId);

            if (!walletId) {
                console.log("No wallet connected, showing wallet modal");
                setShowModal(true);
                return;
            }

            if (!projectId) {
                throw new Error("No blockfrost key found");
            }
            if (!signingKey) {
                throw new Error("No master key found");
            }
            const pk = await agent.runTask(new SDK.Tasks.PKInstance({ verificationMethod: signingKey }))
            if (!pk) {
                throw new Error("No master key found");
            }

            const secret = keys.find(key => Buffer.from(key.publicKey().raw).toString('hex') === Buffer.from(pk.raw).toString('hex'))
            if (!secret) {
                throw new Error("No secret key found");
            }

            const atalaObject = await castor.createPrismDIDAtalaObject(secret, didItem.did)
            const metadataBody = {
                v: 1,
                c: splitStringIntoChunks(atalaObject),
            };
            setPublishing(true);
            const txHash = await buildAndSubmitTransaction(metadataBody);

            const checkConfirmation = async () => {
                const isConfirmed = await checkTransactionConfirmation(txHash, projectId);
                if (isConfirmed) {
                    db?.updateDIDStatus(didItem.did, 'published')

                    setPublishing(false);
                    onUpdate({ ...didItem, status: 'published' })
                } else {
                    await new Promise<void>((resolve) => {
                        setTimeout(async () => {
                            await checkConfirmation();
                            resolve();
                        }, 15000);
                    });
                }
            };

            await new Promise<void>((resolve) => {
                setTimeout(async () => {
                    await checkConfirmation();
                    resolve();
                }, 15000);
            });
        } catch (err: any) {
            setError(err.message || "Failed to publish DID");
        }
    }

    // Function to resolve a DID
    async function resolveDID(didString: string) {
        if (!agent) {
            setError("Agent is not initialized")
            return;
        }

        setIsResolving(true);
        setResolvedData(null);

        try {
            const result = await agent.castor.resolveDID(didString);
            setResolvedData(result);
        } catch (err: any) {
            setError(err.message || "Failed to resolve DID");
        } finally {
            setIsResolving(false);
        }
    }

    return (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            {error && (
                <ErrorAlert
                    message={`Error resolving DID: ${error}`}
                    onDismiss={() => setError(null)}
                />
            )}

            {
                showModal && <SelectWallet onSelected={(wallet) => {
                    setShowModal(false);
                }} />
            }

            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                        {didItem.alias}
                        {
                            didItem.did.method === "prism" && <>
                                {
                                    didItem.status === 'unpublished' ? (
                                        <button
                                            onClick={() => {
                                                if (connected) {
                                                    onPublishClick()
                                                } else {
                                                    setShowModal(true)
                                                }
                                            }}
                                            disabled={publishing}
                                            className="ml-2 px-2 py-0.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                                        >
                                            {publishing ? 'Publishing...' : 'Publish'}
                                        </button>
                                    ) : ` - ${didItem.status.slice(0, 1).toUpperCase() + didItem.status.slice(1)}`
                                }
                            </>
                        }
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {
                            didItem.did.method === "prism" ?
                                didString.split(':').slice(0, 3).join(':') :
                                didString.slice(0, 30) + "..."
                        }
                    </p>
                </div>
                <div className="flex space-x-3">
                    <button
                        onClick={() => resolveDID(didString.split(':').slice(0, 3).join(':'))}
                        disabled={isResolving}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:bg-green-400 disabled:cursor-not-allowed text-sm"
                    >
                        {isResolving ? 'Resolving...' : 'Resolve'}
                    </button>
                </div>
            </div>

            {/* Resolution results */}
            {isResolving && (
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Resolving DID...</p>
                    </div>
                </div>
            )}

            {resolvedData && !isResolving && (
                <div className="mt-4">
                    <div className="p-3 border border-green-200 rounded-md bg-green-50 dark:bg-green-900/20 dark:border-green-800">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-green-700 dark:text-green-400">DID Resolution Result</h3>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none"
                            >
                                {expanded ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                        {expanded ? (
                            <pre className="text-xs bg-white dark:bg-gray-900 p-3 rounded overflow-auto max-h-96 text-gray-800 dark:text-gray-200">
                                {JSON.stringify(resolvedData, null, 2)}
                            </pre>
                        ) : (
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Click expand to view the full resolution data
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}