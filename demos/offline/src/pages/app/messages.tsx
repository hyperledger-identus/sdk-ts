import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

export default function MessagesPage() {
    return (
        <Layout>
            <Head>
                <title>Messages | Identus Agent</title>
                <meta name="description" content="View and manage your messages" />
            </Head>

            <PageHeader
                title="Messages"
                description="View and manage your messages"
            />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Messages</h2>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Compose Message
                    </button>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <p className="text-lg mb-2">No messages yet</p>
                        <p>When you receive or send messages, they will appear here</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 