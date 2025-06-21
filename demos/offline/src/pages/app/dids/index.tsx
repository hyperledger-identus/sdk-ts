import Head from "next/head";
import Layout from "@/components/Layout";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import PageHeader from "@/components/PageHeader";
import { DIDItem } from "@/components/DIDItem";
import { ErrorAlert } from "@/components/ErrorAlert";
import { useDatabase } from "@/hooks";
import { GroupedDIDs } from "@/utils/types";

export default function DIDsPage() {
    const { db, getGroupedDIDs } = useDatabase();
    const router = useRouter();
    const [groupedDIDs, setGroupedDIDs] = useState<GroupedDIDs>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadData = useCallback(async () => {
        if (db) {
            setLoading(true);
            getGroupedDIDs().then(({ prism = [], ...dids }) => {
                setGroupedDIDs({
                    prism,
                    ...dids
                });
            }).catch((err) => {
                setError(err.message);
            }).finally(() => {
                setLoading(false);
            })
        }
    }, [db, getGroupedDIDs])

    useEffect(() => {
        loadData();
    }, [loadData])

    async function createDIDClick() {
        await router.push("/app/dids/create");
    }

    const hasAnyDIDs = Object.values(groupedDIDs).some(dids => dids.length > 0);

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
                {error && (
                    <ErrorAlert
                        message={error}
                        onDismiss={() => setError(null)}
                    />
                )}

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your DIDs</h2>
                    <button
                        onClick={createDIDClick}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Create DID
                    </button>
                </div>

                {loading ? (
                    <div className="p-8 text-center border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-500 dark:text-gray-400">Loading DIDs...</p>
                    </div>
                ) : hasAnyDIDs ? (
                    <div>
                        {Object.entries(groupedDIDs).map(([method, dids]) => (
                            <div key={`${method}-dids`} className="mb-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 capitalize">
                                    {method} DIDs
                                </h3>
                                <div className="border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                                    {dids.map((didItem, index) => (
                                        <DIDItem key={`${method}-${index}`} didItem={didItem} onUpdate={() => {
                                            loadData();
                                        }} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400 border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                        <p className="text-lg mb-2">No DIDs created yet</p>
                        <p>Create your first DID to get started with decentralized identity</p>
                    </div>
                )}
            </div>
        </Layout>
    );
} 