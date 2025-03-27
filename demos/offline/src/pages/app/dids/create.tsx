import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { useAgent } from "@/hooks";

export default function DIDsPage() {
    const { agent } = useAgent();
    const [alias, setAlias] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<{ success: boolean; message: string; did?: string }>();

    const handleCreateDID = async () => {
        if (!agent) {
            setResult({
                success: false,
                message: "Agent is not initialized"
            });
            return;
        }
        try {
            setLoading(true);
            setResult(undefined);
            const did = await agent.createNewPrismDID(alias || "did", []);
            setResult({
                success: true,
                message: "DID created successfully",
                did: did.toString()
            });
        } catch (error) {
            console.error("Error creating DID:", error);
            setResult({
                success: false,
                message: error instanceof Error ? error.message : "Unknown error occurred"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Head>
                <title>DIDs | Identus Agent</title>
                <meta name="description" content="Manage your decentralized identifiers" />
            </Head>

            <PageHeader
                title="DIDs Management"
                description="Create and manage your decentralized identifiers"
            />

            <div className="bg-background-light dark:bg-background-dark hadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Create DID</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="alias" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Alias (Optional)
                        </label>
                        <input
                            type="text"
                            id="alias"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            placeholder="Enter an alias for your DID"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        onClick={handleCreateDID}
                        disabled={loading || !agent}
                        className={`px-4 py-2 rounded-md text-white ${loading || !agent ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        {loading ? 'Creating...' : 'Create DID'}
                    </button>

                    {!agent && (
                        <div className="mt-4 p-4 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400">
                            <p>Agent is not initialized. Please start the agent first.</p>
                        </div>
                    )}

                    {result && (
                        <div className={`mt-4 p-4 rounded-md ${result.success ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400'}`}>
                            <p>{result.message}</p>
                            {result.did && (
                                <div className="mt-2">
                                    <p className="font-semibold">DID:</p>
                                    <p className="break-all">{result.did}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
} 