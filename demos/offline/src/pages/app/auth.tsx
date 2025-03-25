import Head from "next/head";
import { PlutoExtended } from "@/utils/db";
import { StorageType } from "@trust0/ridb";
import { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useRouter } from "next/router";
import { useDatabase } from "@/hooks";
const apollo = new SDK.Apollo();

export default function Auth() {
    const router = useRouter();
    const { db, setDb, state, start, error: dbError } = useDatabase();
    const [dbName, setDbName] = useState('test-db');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState(dbError?.message);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dbName.trim()) {
            setError('Database name is required');
            return;
        }
        // Here you would handle the authentication logic with the app context
        // For example: app.authenticate(dbName, password)
        console.log('Authenticating with:', { dbName, password });
        const db = new PlutoExtended(
            dbName,
            password,
            StorageType.IndexDB,
            apollo
        );
        await db.start();
        setDb(db);
        router.push("/app");
    }

    useEffect(() => {
        if (db) {
            start().catch((err) => {
                setError(err.message);
            });
        }
    }, [db]);

    useEffect(() => {
        if (state === "loaded") {
            router.push("/app");
        }
    }, [state]);

    return (
        <>
            <Head>
                <title>Authentication | Identus Agent</title>
                <meta name="description" content="Manage your connections with other agents" />
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                            Database Authentication
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            Enter your database credentials to continue
                        </p>
                    </div>
                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                        </div>
                    )}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="dbName" className="sr-only">Database Name</label>
                                <input
                                    id="dbName"
                                    name="dbName"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                                    placeholder="Database Name"
                                    value={dbName}
                                    onChange={(e) => setDbName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-700"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Authenticate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
} 