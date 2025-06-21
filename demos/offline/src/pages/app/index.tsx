'use client'
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import AgentRequire from "@/components/AgentRequire";
import PageHeader from "@/components/PageHeader";
import { useDatabase } from "@/hooks";

type FeatureBlock = {
    title: string;
    description: string;
    path: string;
    icon: React.ReactNode;
}

export default function Dashboard() {
    const { features } = useDatabase();


    const agentBlocks: FeatureBlock[] = [
        {
            title: "DIDs",
            description: "Manage decentralized identifiers",
            path: "/app/dids",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            )
        },
        {
            title: "Keys",
            description: "Manage cryptographic keys",
            path: "/app/keys",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            )
        },
        {
            title: "Issuance Requests",
            description: "Manage credential issuance requests",
            path: "/app/issuance-requests",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
            )
        },
    ]

    const holderBlocks: FeatureBlock[] = [
        {
            title: "DIDs",
            description: "Manage decentralized identifiers",
            path: "/app/dids",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            )
        },
        {
            title: "Credentials",
            description: "Manage your credentials",
            path: "/app/credentials",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Keys",
            description: "Manage cryptographic keys",
            path: "/app/keys",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            )
        },
    ]


    const other: FeatureBlock[] = [
        {
            title: "Messages",
            description: "View and manage messages",
            path: "/app/messages",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        },
        {
            title: "Connections",
            description: "Manage your connections",
            path: "/app/connections",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
    ]


    const featureBlocks: FeatureBlock[] = [

    ];

    if (features.includes("agent")) {
        featureBlocks.push(...agentBlocks);
    }

    if (features.includes("holder")) {
        featureBlocks.push(...holderBlocks);
    }

    featureBlocks.push(...other);




    return (
        <AgentRequire>

            <Head>
                <title>Dashboard | Identus Agent</title>
                <meta name="description" content="Dashboard for managing your self-sovereign identity" />
            </Head>

            <Layout>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featureBlocks.map((feature) => (
                        <Link key={feature.path} href={feature.path} className="block group bg-container-light dark:bg-container-dark">
                            <div className="p-6 h-full rounded-lg border border-border-light dark:border-border-dark hover:border-blue-500 dark:hover:border-blue-400 shadow-md transition-all duration-200">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 mr-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        {feature.icon}
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.title}</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Layout>
        </AgentRequire>
    );
} 