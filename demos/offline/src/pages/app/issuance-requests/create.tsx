/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { DIDSelector } from "@/components/DIDSelector";
import { DIDAlias } from "@/utils/types";
import SDK from "@hyperledger/identus-sdk";
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";
import { motion, AnimatePresence } from "framer-motion";
import { useDatabase } from "@/hooks";

type Claim = {
    id: string;
    name: string;
    value: string;
    type: string;
    isValid?: boolean;
};

type ClaimTemplate = {
    name: string;
    claims: Omit<Claim, 'id'>[];
};

const claimTemplates: ClaimTemplate[] = [
    {
        name: "Basic Identity",
        claims: [
            { name: "firstName", value: "", type: "string" },
            { name: "lastName", value: "", type: "string" },
            { name: "dateOfBirth", value: "", type: "date" }
        ]
    },
    {
        name: "Employment",
        claims: [
            { name: "employer", value: "", type: "string" },
            { name: "position", value: "", type: "string" },
            { name: "startDate", value: "", type: "date" }
        ]
    },
    {
        name: "Education",
        claims: [
            { name: "institution", value: "", type: "string" },
            { name: "degree", value: "", type: "string" },
            { name: "graduationDate", value: "", type: "date" }
        ]
    }
];

export default function CreateIssuanceRequestPage() {
    const { db, error: dbError, createIssuanceFlow } = useDatabase();

    const router = useRouter();
    const [formData, setFormData] = useState({
        issuingDID: "",
        credentialFormat: SDK.Domain.CredentialType.JWT,
        automaticIssuance: true,
        status: "pending"
    });
    const [selectedDID, setSelectedDID] = useState<DIDAlias | null>(null);
    const [claims, setClaims] = useState<Claim[]>([{ id: uuidv4(), name: "", value: "", type: "string" }]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showTemplates, setShowTemplates] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleDIDSelect = (didItem: DIDAlias | null) => {
        setSelectedDID(didItem);
        setFormData({
            ...formData,
            issuingDID: didItem ? didItem.did.toString() : ""
        });
    };

    const validateClaim = (claim: Claim): boolean => {
        return !!claim.name && !!claim.value;
    };

    const handleClaimChange = (index: number, field: keyof Claim, value: string) => {
        const newClaims = [...claims];
        newClaims[index] = { ...newClaims[index], [field]: value };
        // Only preserve existing validation status, don't set it during edits
        setClaims(newClaims);
    };

    const addClaim = () => {
        const newClaim = { id: uuidv4(), name: "", value: "", type: "string" };
        setClaims([...claims, newClaim]);
    };

    const removeClaim = (index: number) => {
        if (claims.length > 1) {
            setClaims(claims.filter((_, i) => i !== index));
        }
    };

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(claims);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setClaims(items);
    };

    const applyTemplate = (template: ClaimTemplate) => {
        const newClaims = template.claims.map(claim => ({
            ...claim,
            id: uuidv4(),
        }));

        setClaims(newClaims);
        setShowTemplates(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setAttemptedSubmit(true);

        // Validate all claims before submission
        const validClaims = claims.map(claim => ({
            ...claim,
            isValid: validateClaim(claim)
        }));

        const allValid = validClaims.every(claim => claim.isValid);

        if (!allValid) {
            setClaims(validClaims);
            setIsSubmitting(false);
            return;
        }

        // Here you would actually save to your database
        const issuanceRequest = {
            id: uuidv4(),
            ...formData,
            claims: claims.filter(claim => claim.name && claim.value).map(({ id, isValid, ...rest }) => rest),
        };


        createIssuanceFlow(issuanceRequest)
            .then(() => {
                router.push("/app/issuance-requests");
            })
            .catch((err) => {
                console.error("Error creating issuance request:", err);
                setIsSubmitting(false);
            })


    };

    return (
        <Layout showDIDSelector={true}>
            <Head>
                <title>Create Issuance Request | Identus Agent</title>
                <meta name="description" content="Create a new credential issuance request" />
            </Head>

            <PageHeader
                title="Create Issuance Request"
                description="Define a new credential issuance request"
            />

            <div className="bg-background-light dark:bg-background-dark shadow-sm p-6 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div>
                            <DIDSelector
                                onSelectDID={handleDIDSelect}
                                selectedDID={selectedDID ? selectedDID.did.toString() : ""}
                                label="Issuing DID"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Credential Format
                            </label>
                            <select
                                name="credentialFormat"
                                value={formData.credentialFormat}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                            >{
                                    Object.values(SDK.Domain.CredentialType)
                                        .filter((format) => format !== SDK.Domain.CredentialType.Unknown && format !== SDK.Domain.CredentialType.W3C && format !== SDK.Domain.CredentialType.AnonCreds)
                                        .map((format) => (
                                            <option key={format} value={format}>{format}</option>
                                        ))
                                }
                            </select>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="automaticIssuance"
                                name="automaticIssuance"
                                checked={formData.automaticIssuance}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="automaticIssuance" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                Automatic Issuance
                            </label>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Claims</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Define the claims for this credential</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowTemplates(!showTemplates)}
                                        className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" />
                                        </svg>
                                        Templates
                                    </button>
                                    <button
                                        type="button"
                                        onClick={addClaim}
                                        className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Add Claim
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence>
                                {showTemplates && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mb-4 overflow-hidden"
                                    >
                                        <div className="p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                                            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select a template</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {claimTemplates.map((template, idx) => (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() => applyTemplate(template)}
                                                        className="p-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors border border-gray-200 dark:border-gray-600"
                                                    >
                                                        <h5 className="font-medium text-gray-800 dark:text-white mb-1">{template.name}</h5>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            {template.claims.map(c => c.name).join(", ")}
                                                        </p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {/* @ts-ignore */}
                            <DragDropContext onDragEnd={handleDragEnd}>
                                {/* @ts-ignore */}
                                <Droppable droppableId="claims">
                                    {(provided) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className="space-y-3"
                                        >
                                            <AnimatePresence>
                                                {
                                                    claims.map((claim, index) =>
                                                        <>
                                                            {/* @ts-ignore */}
                                                            <Draggable key={claim.id} draggableId={claim.id} index={index}>
                                                                {(provided: DraggableProvided) => (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: -10 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        className={`flex items-center space-x-2 p-3 border rounded-md bg-white dark:bg-gray-800 ${claim.isValid === false
                                                                            ? 'border-red-300 dark:border-red-700 shadow-sm shadow-red-100 dark:shadow-red-900/20'
                                                                            : 'border-gray-200 dark:border-gray-700'
                                                                            }`}
                                                                    >
                                                                        <div
                                                                            {...provided.dragHandleProps}
                                                                            className="cursor-move text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                                                            </svg>
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <input
                                                                                type="text"
                                                                                value={claim.name}
                                                                                onChange={(e) => handleClaimChange(index, "name", e.target.value)}
                                                                                placeholder="Claim Name"
                                                                                className={`w-full px-3 py-1.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white text-sm ${claim.isValid === false && !claim.name
                                                                                    ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20'
                                                                                    : 'border-gray-300 dark:border-gray-700'
                                                                                    }`}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <input
                                                                                type={claim.type === 'date' ? 'date' : 'text'}
                                                                                value={claim.value}
                                                                                onChange={(e) => handleClaimChange(index, "value", e.target.value)}
                                                                                placeholder={`Claim Value (${claim.type})`}
                                                                                className={`w-full px-3 py-1.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white text-sm ${claim.isValid === false && !claim.value
                                                                                    ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20'
                                                                                    : 'border-gray-300 dark:border-gray-700'
                                                                                    }`}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="w-28">
                                                                            <select
                                                                                value={claim.type}
                                                                                onChange={(e) => handleClaimChange(index, "type", e.target.value)}
                                                                                className="w-full px-2 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white text-sm"
                                                                            >
                                                                                <option value="string">String</option>
                                                                                <option value="number">Number</option>
                                                                                <option value="boolean">Boolean</option>
                                                                                <option value="date">Date</option>
                                                                            </select>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => removeClaim(index)}
                                                                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 p-1 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                                            title="Remove claim"
                                                                        >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                                            </svg>
                                                                        </button>
                                                                    </motion.div>
                                                                )}
                                                            </Draggable>
                                                        </>
                                                    )}
                                                {provided.placeholder as any}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>

                            {attemptedSubmit && claims.some(claim => claim.isValid === false) && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-3 text-sm text-red-600 dark:text-red-400"
                                >
                                    Please fill in all claim names and values.
                                </motion.div>
                            )}
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
                            >
                                {isSubmitting ? "Creating..." : "Create Request"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
} 