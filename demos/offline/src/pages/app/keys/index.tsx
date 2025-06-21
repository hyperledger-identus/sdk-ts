import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function KeysPage() {
    return (
        <Layout>
            <Head>
                <title>Keys | Identus Agent</title>
                <meta name="description" content="Manage your cryptographic keys" />
            </Head>

            <PageHeader
                title="Keys Management"
                description="Create and manage your cryptographic keys"
            />

            <div className="bg-background-light dark:bg-background-dark hadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Keys</h2>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Generate Key
                    </button>
                </div>

                <div className="border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        <p className="text-lg mb-2">No keys created yet</p>
                        <p>Generate your first cryptographic key to get started</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 