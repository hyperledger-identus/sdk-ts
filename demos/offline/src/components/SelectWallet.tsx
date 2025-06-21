import { useEffect, useState } from "react";
import { BrowserWallet, Wallet } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { WALLET_NAME } from "@/config";
import { useDatabase } from "@/hooks";
import Image from "next/image";

export default function SelectWallet({ onSelected }: { onSelected: (wallet: Wallet) => void }) {
    const { db, wallet: selectedWallet, storeSettingsByKey } = useDatabase();
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

    return <div className="fixed inset-0 z-[9999] bg-background-light dark:bg-background-dark overflow-y-auto bg-black-20 flex items-center justify-center p-4">
        <div className="rounded-lg shadow-xl max-w-2xl w-full p-6">
            <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Connect to a Cardano Wallet</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark my-5">
                Please select a wallet to continue
            </p>
            {error && (
                <div className="mb-4 p-3 bg-status-error-light/10 dark:bg-status-error-dark/10 border border-status-error-light/20 dark:border-status-error-dark/20 text-status-error-light dark:text-status-error-dark rounded">
                    <p>Error loading wallets: {error}</p>
                </div>
            )}

            {availableWallets.length === 0 ? (
                <div className="py-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-button-primary-light dark:border-button-primary-dark mx-auto mb-4"></div>
                    <p className="text-text-primary-light dark:text-text-primary-dark">Loading wallets...</p>
                    <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        Make sure you have a compatible Cardano wallet extension installed
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {availableWallets.map((foundWallet: Wallet) => (
                        <button
                            key={foundWallet.name}
                            className={`w-full flex items-center px-3 py-2 text-sm hover:bg-background-light/50 dark:hover:bg-background-dark/50 ${selectedWallet === foundWallet.name ? 'bg-background-light/50 dark:bg-background-dark/50' : ''
                                }`}
                            onClick={async () => {
                                try {
                                    connect(foundWallet.name);
                                    await storeSettingsByKey(WALLET_NAME, foundWallet.name);
                                    onSelected(foundWallet);
                                } catch (err: any) {
                                    console.error("Error connecting wallet:", err);
                                    setError(`Error connecting wallet: ${err.message}`);
                                }
                            }}
                        >
                            <Image
                                src={foundWallet.icon}
                                alt={foundWallet.name}
                                className="w-8 h-8 mr-4"
                                width={24}
                                height={24}
                            />
                            <span className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark">
                                {foundWallet.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    </div>
}