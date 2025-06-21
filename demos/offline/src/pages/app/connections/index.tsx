import Head from "next/head";

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { OOB } from "@/components/OOB";
import { useAgent } from "@/hooks";

export default function ConnectionsPage() {
    const { connections } = useAgent();
    return (
        <Layout>
            <Head>
                <title>Connections | Identus Agent</title>
                <meta name="description" content="Manage your connections with other agents" />
            </Head>
            <PageHeader
                title="Connections"
                description="Manage your connections with other agents and services"
            />
            <div className="bg-background-light dark:bg-background-dark hadow-sm">
                <OOB />
                {
                    connections.length <= 0 ?
                        <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                            No connections.
                        </p>
                        :
                        null
                }
                {
                    connections.map((connection, i) => {
                        return <p key={`connection${i}`} className="my-5 overflow-x-auto h-auto text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                            {connection.name}
                        </p>
                    })
                }
            </div>
        </Layout>
    );
} 