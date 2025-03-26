import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useAgent } from "@/hooks";
import Link from "next/link";
import SDK from '@hyperledger/identus-sdk';

export default function MessagesPage() {
    const { messages } = useAgent();

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

                {messages.length === 0 ? (
                    <div className="border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <p className="text-lg mb-2">No messages yet</p>
                            <p>When you receive or send messages, they will appear here</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {messages.map((message) => {
                            const msg = message.message;
                            return (
                                <Link
                                    key={msg.id}
                                    href={`/app/messages/${msg.id}`}
                                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${msg.direction === SDK.Domain.MessageDirection.SENT
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                    }`}>
                                                    {msg.direction === SDK.Domain.MessageDirection.SENT ? 'Sent' : 'Received'}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {new Date(msg.createdTime * 1000).toLocaleString()}
                                                </span>
                                            </div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {msg.piuri}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                {msg.direction === SDK.Domain.MessageDirection.SENT
                                                    ? `To: ${msg.to?.toString() || 'N/A'}`
                                                    : `From: ${msg.from?.toString() || 'N/A'}`
                                                }
                                            </p>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
} 