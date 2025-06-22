import { useEffect, useState, useRef, useCallback } from "react";
import { BrowserWallet, Wallet } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { useDatabase } from "@/hooks";
import Image from "next/image";

export function WalletSelect() {
    const { error: dbError, setWallet, wallet: selectedWallet } = useDatabase();
    const { connect, disconnect, connected } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
    const [error, setError] = useState<string | undefined>(dbError?.message);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    const onHandleLogout = useCallback(async () => {
        try {
            await disconnect();
            await setWallet(null);
            setIsOpen(false);
        } catch (err: any) {
            console.error("Error disconnecting wallet:", err);
            setError(`Error disconnecting wallet: ${err.message}`);
        }
    }, [disconnect, setWallet, setIsOpen]);

    const onHandleConnect = useCallback(async (wallet: Wallet) => {
        try {
            await connect(wallet.name);
            await setWallet(wallet.name);
            setIsOpen(false);
        } catch (err: any) {
            console.error("Error connecting wallet:", err);
            setError(`Error connecting wallet: ${err.message}`);
        }
    }, [connect, setWallet, setIsOpen]);


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
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    if (availableWallets.length === 0) {
        return <div className="text-text-secondary-light dark:text-text-secondary-dark px-4 py-3">
            No wallets found
        </div>
    }

    const selectedWalletData = availableWallets.find(w => w.name === selectedWallet);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-56 bg-input-background-light dark:bg-input-background-dark border border-input-border-light dark:border-input-border-dark rounded-md py-2 px-3 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-button-primary-light dark:focus:ring-button-primary-dark focus:border-button-primary-light dark:focus:border-button-primary-dark transition-colors duration-200"
            >
                <div className="flex items-center">
                    {selectedWalletData?.icon && (
                        <Image
                            src={selectedWalletData.icon}
                            alt={selectedWalletData.name}
                            className="w-6 h-6 mr-2"
                            width={24}
                            height={24}
                        />
                    )}
                    <span className="text-text-primary-light dark:text-text-primary-dark">{selectedWallet || "Select Wallet"}</span>
                </div>
                <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-56 mt-1 bg-input-background-light dark:bg-input-background-dark border border-input-border-light dark:border-input-border-dark rounded-md shadow-lg">
                    {connected ? (
                        <button
                            onClick={onHandleLogout}
                            className="w-full flex items-center px-3 py-2 text-sm text-status-error-light dark:text-status-error-dark hover:bg-status-error-light/10 dark:hover:bg-status-error-dark/10"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            Disconnect Wallet
                        </button>
                    ) : (
                        availableWallets.map((foundWallet) => (
                            <button
                                key={foundWallet.name}
                                onClick={() => onHandleConnect(foundWallet)}
                                className={`w-full flex items-center px-3 py-2 text-sm hover:bg-background-light/50 dark:hover:bg-background-dark/50 ${selectedWallet === foundWallet.name ? 'bg-background-light/50 dark:bg-background-dark/50' : ''
                                    }`}
                            >
                                {foundWallet.icon && (
                                    <Image
                                        src={foundWallet.icon}
                                        alt={foundWallet.name}
                                        className="w-6 h-6 mr-2"
                                        width={24}
                                        height={24}
                                    />
                                )}
                                <span className="text-text-primary-light dark:text-text-primary-dark">{foundWallet.name}</span>
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
} 