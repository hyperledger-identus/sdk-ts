

import { useEffect, useState } from "react";
import { BrowserWallet, Wallet } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { WALLET_NAME } from "@/config";
import { useDatabase } from "@/hooks";

export default function SelectWallet({ onSelected }: { onSelected: (wallet: Wallet) => void }) {
    const { db, getWallet } = useDatabase();
    const { connect } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        BrowserWallet.getAvailableWallets().then((foundWallets) => {
            console.log("Found wallets:", foundWallets);
            setAvailableWallets(foundWallets);
        }).catch(err => {
            console.error("Error loading wallets:", err);
            setError(err.message || "Failed to load wallets");
        });
    }, []);

    useEffect(() => {
        getWallet().then(async (walletId) => {
            console.log("Stored wallet ID:", walletId);
            if (walletId) {
                await connect(walletId);
            }
        }).catch(err => {
            setError(err.message || "Failed to load wallet");
        });
    }, []);

    return <div className="fixed inset-0 z-[9999] bg-white dark:bg-gray-800  overflow-y-auto bg-black/20 flex items-center justify-center p-4">
        <div className=" rounded-lg shadow-xl max-w-2xl w-full p-6">
            <h1 className="text-2xl font-bold">Connect to a Cardano Wallet</h1>
            <p className="text-gray-500 dark:text-gray-400 my-5">
                Please select a wallet to continue
            </p>
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                    <p>Error loading wallets: {error}</p>
                </div>
            )}

            {availableWallets.length === 0 ? (
                <div className="py-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading wallets...</p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                        Make sure you have a compatible Cardano wallet extension installed
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availableWallets.map((foundWallet: Wallet) => (
                        <button
                            key={foundWallet.name}
                            className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center"
                            onClick={async () => {
                                try {
                                    connect(foundWallet.name);
                                    await db?.storeSettingsByKey(WALLET_NAME, foundWallet.name);
                                } catch (err: any) {
                                    console.error("Error connecting wallet:", err);
                                    setError(`Error connecting wallet: ${err.message}`);
                                }
                            }}
                        >
                            <img
                                src={foundWallet.icon}
                                alt={foundWallet.name}
                                className="w-8 h-8 mr-4"
                            />
                            <span className="text-lg font-medium">
                                {foundWallet.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    </div>
}