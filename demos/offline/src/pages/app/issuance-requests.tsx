import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function IssuanceRequestsPage() {
    return (
        <Layout showDIDSelector={true}>
            <Head>
                <title>Issuance Requests | Identus Agent</title>
                <meta name="description" content="Manage credential issuance requests" />
            </Head>

            <PageHeader
                title="Issuance Requests"
                description="Manage and track your credential issuance requests"
            />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Issuance Requests</h2>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        New Request
                    </button>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-lg mb-2">No issuance requests yet</p>
                        <p>Create a new request to initiate the credential issuance process</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 