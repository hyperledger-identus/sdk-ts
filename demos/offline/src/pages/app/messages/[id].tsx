import { ErrorAlert } from "@/components/ErrorAlert";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useAgent, useDatabase } from "@/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SDK from '@hyperledger/identus-sdk';

export default function MessageDetails() {
    const { messages, readMessage } = useAgent();
    const router = useRouter();
    const { id } = router.query;
    const [error, setError] = useState<string | null>(null);

    const message = messages.find((message) => message.message.id === id);

    useEffect(() => {
        if (message && !message.read) {
            readMessage(message.message);
        }
    }, [message])

    if (!message) {
        return <Layout>
            <Head>
                <title>Message Details | Identus Agent</title>
                <meta name="description" content="View message details" />
            </Head>

            <PageHeader
                title="Message Details"
                description="View detailed information about a message"
            />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <ErrorAlert
                    message={"Message not found"}
                    onDismiss={() => setError(null)}
                />
            </div>
        </Layout>
    }

    const msg = message.message;

    return <Layout>
        <Head>
            <title>Message Details | Identus Agent</title>
            <meta name="description" content="View message details" />
        </Head>

        <PageHeader
            title="Message Details"
            description="View detailed information about a message"
        />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="space-y-6">
                {/* Basic Message Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message ID</h3>
                        <p className="text-sm font-mono break-all">{msg.id}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Protocol URI</h3>
                        <p className="text-sm font-mono break-all">{msg.piuri}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">From</h3>
                        <p className="text-sm font-mono break-all">{msg.from?.toString() || 'N/A'}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">To</h3>
                        <p className="text-sm font-mono break-all">{msg.to?.toString() || 'N/A'}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Direction</h3>
                        <p className="text-sm">{msg.direction === SDK.Domain.MessageDirection.SENT ? 'Sent' : 'Received'}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Created Time</h3>
                        <p className="text-sm">{new Date(msg.createdTime * 1000).toLocaleString()}</p>
                    </div>
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message Body</h3>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                            {JSON.stringify(msg.body, null, 2)}
                        </pre>
                    </div>
                </div>

                {/* Attachments */}
                {msg.attachments.length > 0 && (
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attachments</h3>
                        <div className="space-y-4">
                            {msg.attachments.map((attachment, index) => (
                                <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">Attachment {index + 1}</span>
                                            {attachment.mediaType && (
                                                <span className="text-xs text-gray-500">{attachment.mediaType}</span>
                                            )}
                                        </div>
                                        {attachment.description && (
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{attachment.description}</p>
                                        )}
                                        {attachment.filename && (
                                            <p className="text-sm font-mono">{attachment.filename}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Extra Headers */}
                {Object.keys(msg.extraHeaders).length > 0 && (
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Extra Headers</h3>
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                            <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                                {JSON.stringify(msg.extraHeaders, null, 2)}
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </Layout>
}