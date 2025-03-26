import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import SDK from "@hyperledger/identus-sdk";
import { useEffect, useState } from "react";
import { useDatabase } from "@/hooks";
export default function CredentialsPage() {
    const [credentials, setCredentials] = useState<SDK.Domain.Credential[]>([]);
    const { db } = useDatabase();
    useEffect(() => {
        if (db) {
            db.pluto.getAllCredentials().then(setCredentials)
        }
    }, [db]);
    return (
        <Layout>
            <Head>
                <title>Credentials | Identus Agent</title>
                <meta name="description" content="Manage your verifiable credentials" />
            </Head>
            <PageHeader
                title="Credentials"
                description="Manage your verifiable credentials and digital attestations"
            />
            <div className="bg-white dark:bg-gray-800 hadow-sm">
                <div className="border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-lg mb-2">No credentials yet</p>
                        <p>Request credentials from issuers to start building your digital identity</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
} 