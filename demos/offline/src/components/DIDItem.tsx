import { useCallback, useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";

import { useWallet } from "@meshsdk/react";
import { Transaction } from "@meshsdk/core";
import { BLOCKFROST_KEY_NAME } from "@/config";
import { ErrorAlert } from "./ErrorAlert";
import SelectWallet from "./SelectWallet";
import { useDatabase, useAgent } from "@/hooks";
import { DIDAlias } from "@/utils/types";

export function DIDItem({ didItem, onUpdate }: { didItem: DIDAlias, onUpdate: (did: DIDAlias) => void }) {
    const { wallet, connected } = useWallet();
    const { db, setWallet, wallet: currentWallet, getSettingsByKey, updateDIDStatus } = useDatabase();
    const { agent } = useAgent();
    const [error, setError] = useState<string | null>(null);
    const [isResolving, setIsResolving] = useState(false);
    const [resolvedData, setResolvedData] = useState<SDK.Domain.DIDDocument | null>(null);
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const didString = didItem.did.toString();
    const [publishing, setPublishing] = useState(false);
    const [wasPublishing, setWasPublishing] = useState(false);


    const buildAndSubmitTransaction = useCallback(async (metadataBody: any) => {
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
    }, [wallet])

    const onPublishClick = useCallback(async () => {
        setWasPublishing(false);

        if (!agent) {
            setError("Agent is not initialized");
            return;
        }
        try {
            const keys = didItem.keys;
            const castor = new SDK.Castor(new SDK.Apollo());
            const document = await agent.castor.resolveDID(didString);
            const signingKey = document.verificationMethods.find(key => key.id.includes("#master"));
            const projectId = await getSettingsByKey(BLOCKFROST_KEY_NAME) ?? null;
            const walletId = currentWallet;
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
                    updateDIDStatus(didItem.did, 'published')

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
    }, [agent, didItem, didString, getSettingsByKey, currentWallet, buildAndSubmitTransaction, updateDIDStatus, onUpdate])

    useEffect(() => {
        if (wallet && wasPublishing) {
            onPublishClick();
        }
    }, [wallet, wasPublishing, onPublishClick])

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
        <div className="p-4 border-b border-border-light dark:border-border-dark last:border-0">
            {error && (
                <ErrorAlert
                    message={`Error resolving DID: ${error}`}
                    onDismiss={() => setError(null)}
                />
            )}

            {
                showModal && <SelectWallet onSelected={(wallet) => {
                    setWallet(wallet.name);
                    setShowModal(false);
                }} />
            }

            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
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
                                                    setWasPublishing(true)
                                                    setShowModal(true)
                                                }
                                            }}
                                            disabled={publishing}
                                            className="ml-2 px-2 py-0.5 bg-button-primary-light hover:bg-button-primary-dark text-white rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-button-primary-light/50 focus:ring-opacity-50 disabled:bg-button-primary-light/50 disabled:cursor-not-allowed"
                                        >
                                            {publishing ? 'Publishing...' : 'Publish'}
                                        </button>
                                    ) : ` - ${didItem.status.slice(0, 1).toUpperCase() + didItem.status.slice(1)}`
                                }
                            </>
                        }
                    </h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark truncate">
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
                        className="px-3 py-1 bg-status-success-light hover:bg-status-success-dark text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-status-success-light/50 focus:ring-opacity-50 disabled:bg-status-success-light/50 disabled:cursor-not-allowed text-sm"
                    >
                        {isResolving ? 'Resolving...' : 'Resolve'}
                    </button>
                </div>
            </div>

            {/* Resolution results */}
            {isResolving && (
                <div className="mt-4 p-3 bg-background-light/50 dark:bg-background-dark/50 rounded-md">
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-button-primary-light dark:border-button-primary-dark mr-2"></div>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Resolving DID...</p>
                    </div>
                </div>
            )}

            {resolvedData && !isResolving && (
                <div className="mt-4">
                    <div className="p-3 border border-status-success-light/20 rounded-md bg-status-success-light/10 dark:bg-status-success-dark/10 dark:border-status-success-dark/20">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-sm font-medium text-status-success-light dark:text-status-success-dark">DID Resolution Result</h3>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-button-primary-light hover:text-button-primary-dark dark:text-button-primary-dark dark:hover:text-button-primary-light focus:outline-none"
                            >
                                {expanded ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                        {expanded ? (
                            <pre className="text-xs bg-background-light dark:bg-background-dark p-3 rounded overflow-auto max-h-96 text-text-primary-light dark:text-text-primary-dark">
                                {JSON.stringify(resolvedData, null, 2)}
                            </pre>
                        ) : (
                            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                                Click expand to view the full resolution data
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}