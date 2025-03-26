import SDK from "@hyperledger/identus-sdk";
import React from "react";
import { useAgent } from "@/hooks";
import { Popup } from "./Popup";

interface ErrorState {
    oob?: string;
    alias?: string;
    general?: string;
}

export const OOB: React.FC = () => {
    const { agent, connections } = useAgent();
    const [oob, setOOB] = React.useState<string>("");
    const [alias, setAlias] = React.useState<string>("");
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [connectionStatus, setConnectionStatus] = React.useState<{ success: boolean; message: string } | null>(null);
    const [errors, setErrors] = React.useState<ErrorState>({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const validateFields = (): boolean => {
        const newErrors: ErrorState = {};

        if (!oob.trim()) {
            newErrors.oob = "OOB invitation or DID is required";
        } else {
            try {
                SDK.Domain.DID.fromString(oob);
            } catch {
                try {
                    new URL(oob);
                } catch {
                    newErrors.oob = "Invalid OOB invitation or DID format";
                }
            }
        }

        if (alias && alias.length > 50) {
            newErrors.alias = "Alias must be less than 50 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "oob") {
            setOOB(value);
            if (errors.oob) {
                setErrors(prev => ({ ...prev, oob: undefined }));
            }
        } else if (name === "alias") {
            setAlias(value);
            if (errors.alias) {
                setErrors(prev => ({ ...prev, alias: undefined }));
            }
        }
    };

    async function onConnectionHandleClick() {
        if (!validateFields()) {
            return;
        }
        if (!agent) {
            setErrors({ general: "Agent not initialized. Please start the agent first." });
            return;
        }
        setIsSubmitting(true);
        setErrors({});
        try {
            const parsed = await agent.parseOOBInvitation(new URL(oob));
            await agent.acceptInvitation(parsed, alias);
            setConnectionStatus({ success: true, message: "Connection established successfully!" });
            setIsPopupOpen(false);
        } catch (err) {
            if (!alias) {
                setErrors({ alias: "Alias is required for this connection type" });
                return;
            }
            try {
                const from = await agent.createNewPeerDID([], true);
                const resolved = await agent.castor.resolveDID(from.toString());
                const accept = resolved.services.reduce((_, service) => ([..._, ...service.serviceEndpoint.accept]), [] as any);
                const to = SDK.Domain.DID.fromString(oob);
                const message = new SDK.HandshakeRequest({ accept: accept }, from, to);
                await agent.sendMessage(message.makeMessage());
                setConnectionStatus({ success: true, message: "Connection established successfully!" });
                await agent.connections.add(new SDK.DIDCommConnection(from.toString(), to.toString(), alias));
                setIsPopupOpen(false);
            } catch (error) {
                setErrors({ general: "Failed to establish connection. Please try again." });
            }
        } finally {
            setOOB("");
            setAlias("");
            setIsSubmitting(false);
        }
    }

    const connection = connections.at(0);
    return <>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">Out of Band Connections</h2>
            <button
                onClick={() => setIsPopupOpen(true)}
                className="px-4 py-2 bg-button-primary-light dark:bg-button-primary-dark hover:bg-button-primary-dark dark:hover:bg-button-primary-light text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-button-primary-light/50 dark:focus:ring-button-primary-dark/50">
                Create DID
            </button>
        </div>
        {!!connection && (
            <>
                <p className="text-text-primary-light dark:text-text-primary-dark">Stored Connection as <b>{connection.name}</b></p>
            </>
        )}
        <Popup
            isOpen={isPopupOpen}
            onClose={() => {
                setOOB("");
                setAlias("");
                setIsPopupOpen(false);
                setErrors({});
            }}
            title={"New connection"}
            footerButtons={[
                <button
                    key="create"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-button-primary-light dark:bg-button-primary-dark text-base font-medium text-white hover:bg-button-primary-dark dark:hover:bg-button-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-button-primary-light/50 dark:focus:ring-button-primary-dark/50 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onConnectionHandleClick}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating..." : "Create"}
                </button>
            ]}
        >
            <h1 className="mb-4 text-lg font-extrabold tracking-tight leading-none text-text-primary-light dark:text-text-primary-dark">
                Accept OOB (Connections / Presentations)
            </h1>
            <p className="mb-4 text-md text-text-primary-light dark:text-text-primary-dark">
                This screen can help you establish a connection with another entity, wallet or agent. It also allows accepting an out of band verification request, when a verifier is asking you to prove something without a pre-existing connection, what we call "Connectionless presentation".
            </p>

            {errors.general && (
                <div className="mb-4 p-3 bg-status-error-light/10 dark:bg-status-error-dark/10 border border-status-error-light/20 dark:border-status-error-dark/20 text-status-error-light dark:text-status-error-dark rounded">
                    {errors.general}
                </div>
            )}

            <div className="mb-4">
                <label htmlFor="alias" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                    Connection Name (Optional)
                </label>
                <input
                    id="alias"
                    name="alias"
                    className={`block p-2.5 w-full text-sm text-text-primary-light dark:text-text-primary-dark bg-input-background-light dark:bg-input-background-dark rounded-lg border ${errors.alias ? 'border-status-error-light dark:border-status-error-dark' : 'border-input-border-light dark:border-input-border-dark'
                        } focus:ring-button-primary-light dark:focus:ring-button-primary-dark focus:border-button-primary-light dark:focus:border-button-primary-dark`}
                    placeholder="Enter a name for this connection"
                    type="text"
                    value={alias}
                    onChange={handleOnChange}
                />
                {errors.alias && (
                    <p className="mt-1 text-sm text-status-error-light dark:text-status-error-dark">{errors.alias}</p>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="oob" className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                    OOB Invitation or DID
                </label>
                <input
                    id="oob"
                    name="oob"
                    className={`block p-2.5 w-full text-sm text-text-primary-light dark:text-text-primary-dark bg-input-background-light dark:bg-input-background-dark rounded-lg border ${errors.oob ? 'border-status-error-light dark:border-status-error-dark' : 'border-input-border-light dark:border-input-border-dark'
                        } focus:ring-button-primary-light dark:focus:ring-button-primary-dark focus:border-button-primary-light dark:focus:border-button-primary-dark`}
                    placeholder="Paste out of band connection QRCode here or a DID"
                    type="text"
                    value={oob}
                    onChange={handleOnChange}
                />
                {errors.oob && (
                    <p className="mt-1 text-sm text-status-error-light dark:text-status-error-dark">{errors.oob}</p>
                )}
            </div>
        </Popup>
    </>;
};
