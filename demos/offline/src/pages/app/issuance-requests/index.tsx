import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useAgent, useDatabase } from "@/hooks";
import { useEffect, useState } from "react";
import SDK from '@hyperledger/identus-sdk';
import { v4 as uuidv4 } from 'uuid';
import { base64ToBytes } from "did-jwt";
import QRCodeDisplay from "@/components/QRCodeDisplay";

type IssuanceRequest = {
    id: string;
    issuingDID: string;
    credentialFormat: string;
    automaticIssuance: boolean;
    status: string;
    claims: Array<{
        name: string;
        value: string;
        type: string;
    }>;
    createdAt?: number;
};

export default function IssuanceRequestsPage() {
    const { db, error: dbError, getIssuanceFlows } = useDatabase();
    const { agent, peerDID } = useAgent();
    const [issuanceRequests, setIssuanceRequests] = useState<IssuanceRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showPopup, setShowPopup] = useState(false);
    const [oob, setOob] = useState<string | null>(null);
    const [selectedRequest, setSelectedRequest] = useState<IssuanceRequest | null>(null);

    useEffect(() => {
        if (db) {
            setIsLoading(true);
            getIssuanceFlows()
                .then((data) => {
                    setIssuanceRequests(data || []);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Error loading issuance requests:", err);
                    setError("Failed to load issuance requests");
                    setIsLoading(false);
                });
        }
    }, [db, getIssuanceFlows]);

    const openPopup = async (request: IssuanceRequest) => {
        if (!agent || !peerDID) return;

        const oobTask = new SDK.Tasks.CreateOOBOffer({
            from: peerDID,
            offer: new SDK.OfferCredential(
                {
                    goal_code: "Offer Credential",
                    credential_preview: {
                        type: SDK.ProtocolType.DidcommCredentialPreview,
                        body: {
                            attributes: request.claims.map((claim) => ({ name: claim.name, value: claim.value })),
                        },
                    },
                },
                [
                    new SDK.Domain.AttachmentDescriptor(
                        {
                            json: {
                                id: uuidv4(),
                                media_type: "application/json",
                                options: {
                                    challenge: uuidv4(),
                                    domain: window.location.origin || "domain",
                                },
                                thid: request.id,
                                presentation_definition: {
                                    id: uuidv4(),
                                    input_descriptors: [],
                                    format: {
                                        jwt: {
                                            alg: ["ES256K"],
                                            proof_type: [],
                                        },
                                    },
                                },
                                format: "prism/jwt",
                            },
                        },
                        "application/json",
                        request.id,
                        undefined,
                        "prism/jwt"
                    )
                ],
                undefined,
                undefined,
                request.id
            )
        });
        const oob = await agent.runTask(oobTask);
        const oobDecoded = base64ToBytes(oob);
        const oobJson = Buffer.from(oobDecoded).toString();
        setOob(oobJson);
        setSelectedRequest(request);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedRequest(null);
        setOob(null);
    };

    return (
        <Layout showDIDSelector={true}>
            <Head>
                <title>Issuance Requests | Identus Agent</title>
                <meta name="description" content="Manage credential issuance requests" />
            </Head>

            <PageHeader
                title="Issuance Requests"
                description="Manage and track your credential issuance requests"
            />

            <div className="bg-background-light dark:bg-background-dark shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Issuance Requests</h2>
                    <Link href="/app/issuance-requests/create">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            New Request
                        </button>
                    </Link>
                </div>

                {isLoading && (
                    <div className="border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900 p-8 text-center">
                        <div className="animate-pulse flex justify-center items-center space-x-2">
                            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-400 rounded-full animation-delay-200"></div>
                            <div className="w-4 h-4 bg-blue-400 rounded-full animation-delay-400"></div>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 mt-4">Loading issuance requests...</p>
                    </div>
                )}

                {error && (
                    <div className="border border-red-200 dark:border-red-800 rounded-md bg-red-50 dark:bg-red-900/20 p-4 text-center text-red-600 dark:text-red-400">
                        <p>{error}</p>
                        {dbError && <p className="text-sm mt-1">Database error: {dbError.message}</p>}
                    </div>
                )}

                {!isLoading && !error && issuanceRequests.length === 0 && (
                    <div className="border border-border-light dark:border-border-dark rounded-md bg-gray-50 dark:bg-gray-900">
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-lg mb-2">No issuance requests yet</p>
                            <p>Create a new request to initiate the credential issuance process</p>
                        </div>
                    </div>
                )}

                {!isLoading && !error && issuanceRequests.length > 0 && (
                    <div className="border border-border-light dark:border-border-dark rounded-md overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                            <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Issuing DID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Format
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Claims
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {issuanceRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                            <span className="font-mono">{request.id.slice(0, 8)}...</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-mono">{request.issuingDID.slice(0, 16)}...</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                {request.credentialFormat}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {request.claims.length} claims
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${request.status === 'pending'
                                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                                : request.status === 'issued'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                                }`}>
                                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                            <button
                                                onClick={() => openPopup(request)}
                                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-3">
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Popup Modal */}
            {showPopup && selectedRequest && oob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                        <div className="p-6">
                            <button
                                onClick={closePopup}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Credential Offer QR Code</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        Scan this QR code with your wallet to receive the credential offer
                                    </p>
                                </div>
                                <QRCodeDisplay oob={oob} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
} 