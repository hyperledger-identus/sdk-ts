import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";
import { PRISM_RESOLVER_URL_KEY } from "@/config";
import { useAgent, useDatabase } from "@/hooks";


export default function PrismResolverPage() {
    const { db } = useDatabase();
    const { agent } = useAgent();
    const [resolverUrl, setResolverUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [didToResolve, setDidToResolve] = useState("");
    const [resolvingDid, setResolvingDid] = useState(false);
    const [didDocument, setDidDocument] = useState<any>(null);
    const [didResolutionError, setDidResolutionError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            if (!db) {
                throw new Error("Database not initialized");
            }
            const url = await db.getSettingsByKey(PRISM_RESOLVER_URL_KEY);
            if (url) {
                setResolverUrl(url);
            }
        }
        load();
    }, [db]);

    const [result, setResult] = useState<{ success: boolean, message: string } | null>(null);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (!db) {
                throw new Error("Database not initialized");
            }
            await db.storeSettingsByKey(PRISM_RESOLVER_URL_KEY, resolverUrl);
            setResult({
                success: true,
                message: "PRISM DID resolver URL successfully saved"
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

    const handleResolveDid = async () => {
        if (!agent || !didToResolve) return;

        setResolvingDid(true);
        setDidDocument(null);
        setDidResolutionError(null);

        try {
            const resolvedDid = await agent.castor.resolveDID(didToResolve);
            setDidDocument(resolvedDid);
        } catch (error) {
            setDidResolutionError(error instanceof Error ? error.message : "Failed to resolve DID");
        } finally {
            setResolvingDid(false);
        }
    };

    return (
        <Layout>
            <Head>
                <title>PRISM DID Resolver Settings | Identus Agent</title>
                <meta name="description" content="Configure your PRISM DID resolver URL" />
            </Head>

            <PageHeader
                title="PRISM DID Resolver Settings"
                description="Configure the URL for resolving PRISM DIDs"
            />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">PRISM DID Resolver Configuration</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="resolverUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            PRISM DID Resolver URL
                        </label>
                        <input
                            type="text"
                            id="resolverUrl"
                            value={resolverUrl}
                            onChange={(e) => setResolverUrl(e.target.value)}
                            placeholder="Enter the PRISM DID resolver URL"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            This URL is required for resolving PRISM DIDs.
                        </p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || !agent || !resolverUrl}
                        className={`px-4 py-2 rounded-md text-white ${loading || !agent || !resolverUrl ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        {loading ? 'Saving...' : 'Save Resolver URL'}
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Resolve PRISM DID</h2>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="didToResolve" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            DID to Resolve
                        </label>
                        <input
                            type="text"
                            id="didToResolve"
                            value={didToResolve}
                            onChange={(e) => setDidToResolve(e.target.value)}
                            placeholder="Enter a DID to resolve (e.g. did:prism:...)"
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        onClick={handleResolveDid}
                        disabled={resolvingDid || !agent || !didToResolve || !resolverUrl}
                        className={`px-4 py-2 rounded-md text-white ${resolvingDid || !agent || !didToResolve || !resolverUrl ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        {resolvingDid ? 'Resolving...' : 'Resolve DID'}
                    </button>

                    {didResolutionError && (
                        <div className="mt-4 p-4 rounded-md bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400">
                            <p>{didResolutionError}</p>
                        </div>
                    )}

                    {didDocument && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">DID Document</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-auto max-h-96">
                                <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                                    {JSON.stringify(didDocument, null, 2)}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
} 