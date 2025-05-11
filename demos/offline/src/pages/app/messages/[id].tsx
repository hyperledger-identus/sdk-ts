import { ErrorAlert } from "@/components/ErrorAlert";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useAgent } from "@/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Message } from "@/components/Message";

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
    }, [message, readMessage])

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

            <div className="bg-background-light dark:bg-background-dark hadow-sm">
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

        <div className="bg-background-light dark:bg-background-dark hadow-sm">
            <div className="space-y-6">
                <Message message={msg} />

            </div>
        </div>
    </Layout>
}