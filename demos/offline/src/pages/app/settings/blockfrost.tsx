import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";
import { BLOCKFROST_KEY_NAME } from "@/config";
import { useAgent, useDatabase } from "@/hooks";


export default function BlockfrostPage() {
    const { db } = useDatabase();
    const { agent } = useAgent();
    const [apiKey, setApiKey] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            if (!db) {
                throw new Error("Database not initialized");
            }
            const key = await db.getSettingsByKey(BLOCKFROST_KEY_NAME)
            if (key) {
                setApiKey(key);
            }
        }
        load();
    }, [])


    const [result, setResult] = useState<{ success: boolean, message: string } | null>(null);

    const handleSubmit = async () => {
        // Empty submit function that will store the API key later on
        setLoading(true);
        try {
            if (!db) {
                throw new Error("Database not initialized");
            }
            // This is where the API key would be stored
            await db.storeSettingsByKey(BLOCKFROST_KEY_NAME, apiKey);
            setResult({
                success: true,
                message: "API key successfully saved"
            });
        } catch (error) {
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
                <title>Blockfrost Settings | Identus Agent</title>
                <meta name="description" content="Configure your Blockfrost API settings" />
            </Head>

            <PageHeader
                title="Blockfrost Settings"
                description="Configure your Blockfrost API key for Cardano blockchain interactions"
            />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Blockfrost API Configuration</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Blockfrost API Key
                        </label>
                        <input
                            type="text"
                            id="apiKey"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Enter your Blockfrost API key"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            This API key is required for interacting with the Cardano blockchain.
                        </p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || !agent || !apiKey}
                        className={`px-4 py-2 rounded-md text-white ${loading || !agent || !apiKey ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        {loading ? 'Saving...' : 'Save API Key'}
                    </button>

                    {!agent && (
                        <div className="mt-4 p-4 rounded-md bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400">
                            <p>Agent is not initialized. Please start the agent first.</p>
                        </div>
                    )}

                    {result && (
                        <div className={`mt-4 p-4 rounded-md ${result.success ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400'}`}>
                            <p>{result.message}</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
} 