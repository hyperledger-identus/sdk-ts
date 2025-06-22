import Head from "next/head";
import { useEffect, useState } from "react";
import { useDatabase } from "@/hooks";
import AtalaGraphic from "@/components/Identus";
import Image from "next/image";
import { StorageType } from "@trust0/ridb";

export default function Auth() {
    const { error: dbError, start } = useDatabase();
    const [dbName, setDbName] = useState('test-db');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState(dbError?.message);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dbName.trim()) {
            setError('Database name is required');
            return;
        }
        start({
            dbName,
            password,
            storageType: StorageType.IndexDB,
        })
            .catch((err) => {
                setError(err.message);
            })
    }

    useEffect(() => {
        setError(dbError?.message);
    }, [dbError])

    return (
        <>
            <Head>
                <title>Authentication | Identus Agent</title>
                <meta name="description" content="Manage your connections with other agents" />
            </Head>
            <AtalaGraphic />
            <div className="relative min-h-screen w-full overflow-hidden">
                <div className="relative z-10 min-h-screen flex items-center justify-center ">
                    <div className="max-w-md w-full space-y-8 p-8 bg-background-light dark:bg-background-dark rounded-lg shadow-md">
                        <Image src="/identus-navbar-light.png" alt="Identus Logo" width={500} height={100} />
                        {error && (
                            <div className="bg-status-error-light/10 dark:bg-status-error-dark/20 p-4 rounded-md">
                                <p className="text-sm text-status-error-light dark:text-status-error-dark">{error}</p>
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
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-input-border-light dark:border-input-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-t-md focus:outline-none focus:ring-button-primary-light focus:border-button-primary-light focus:z-10 sm:text-sm bg-input-background-light dark:bg-input-background-dark"
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
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-input-border-light dark:border-input-border-dark placeholder-text-secondary-light dark:placeholder-text-secondary-dark text-text-primary-light dark:text-text-primary-dark rounded-b-md focus:outline-none focus:ring-button-primary-light focus:border-button-primary-light focus:z-10 sm:text-sm bg-input-background-light dark:bg-input-background-dark"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-button-primary-light hover:bg-button-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-primary-light"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
} 