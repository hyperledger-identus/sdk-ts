import { useEffect, useState, useRef } from "react";
import { BrowserWallet, Wallet } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import { useDatabase } from "@/hooks";

export function WalletSelect() {
    const { getWallet, error: dbError, setWallet } = useDatabase();
    const { connect, disconnect, connected } = useWallet();
    const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
    const [selectedWallet, setSelectedWallet] = useState<string>("");
    const [error, setError] = useState<string | undefined>(dbError?.message);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
                setSelectedWallet(walletId);
                await connect(walletId);
            }
        }).catch(err => {
            setError(err.message || "Failed to load wallet");
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

    const handleLogout = async () => {
        try {
            await disconnect();
            setSelectedWallet("");
            await setWallet(null);
            setIsOpen(false);
        } catch (err: any) {
            console.error("Error disconnecting wallet:", err);
            setError(`Error disconnecting wallet: ${err.message}`);
        }
    };

    if (availableWallets.length === 0) {
        return <div className="text-gray-500 dark:text-gray-400 px-4 py-3">
            No wallets found
        </div>
    }

    const selectedWalletData = availableWallets.find(w => w.name === selectedWallet);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-56 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
            >
                <div className="flex items-center">
                    {selectedWalletData?.icon && (
                        <img
                            src={selectedWalletData.icon}
                            alt={selectedWalletData.name}
                            className="w-6 h-6 mr-2"
                        />
                    )}
                    <span>{selectedWallet || "Select Wallet"}</span>
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
                <div className="absolute z-10 w-56 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg">
                    {connected ? (
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
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
                                onClick={async () => {
                                    try {
                                        setSelectedWallet(foundWallet.name);
                                        await connect(foundWallet.name);
                                        await setWallet(foundWallet.name);
                                        setIsOpen(false);
                                    } catch (err: any) {
                                        console.error("Error connecting wallet:", err);
                                        setError(`Error connecting wallet: ${err.message}`);
                                    }
                                }}
                                className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 ${selectedWallet === foundWallet.name ? 'bg-gray-100 dark:bg-gray-600' : ''
                                    }`}
                            >
                                {foundWallet.icon && (
                                    <img
                                        src={foundWallet.icon}
                                        alt={foundWallet.name}
                                        className="w-6 h-6 mr-2"
                                    />
                                )}
                                <span>{foundWallet.name}</span>
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
} 