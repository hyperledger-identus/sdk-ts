import React, { useState } from "react";

import SDK from "@hyperledger/identus-sdk";
import { useAgent } from "@/hooks";


function protect(credential: SDK.Domain.Credential) {
    const newClaims: any[] = []
    credential.claims.forEach((claim) => {
        const newClaim = {} as any
        Object.keys(claim).forEach((key) => {
            newClaim[key] = "******"
        })
        newClaims.push(newClaim)
    })
    return newClaims
}

export function Credential(props: { credential: SDK.Domain.Credential }) {
    const { credential } = props;
    const { agent } = useAgent();
    const [claims, setClaims] = useState(protect(credential));

    function revealAttributes(credential: SDK.Domain.Credential, claimIndex: number, field: string) {
        agent?.pluto.getLinkSecret()
            .then((linkSecret) => {
                agent?.revealCredentialFields(
                    credential,
                    [field],
                    linkSecret!.secret
                ).then((revealedFields) => {
                    const revealed = claims.map((claim, index) => {
                        if (claimIndex === index) {
                            return {
                                ...claim,
                                [field]: revealedFields[field]
                            }
                        }
                        return claim
                    })
                    setClaims(revealed)
                })
            })
    }

    return <div className="w-full mt-5 p-6 bg-background-light dark:bg-background-dark rounded-lg shadow">
        <p className="text-md font-normal text-text-secondary-light dark:text-text-secondary-dark whitespace-normal max-w-full"
            style={{
                textOverflow: 'ellipsis',
                overflow: "hidden"
            }}>
            Issuer {credential.issuer}
        </p>
        <p className="mt-5 text-md font-normal text-text-secondary-light dark:text-text-secondary-dark whitespace-normal max-w-full">
            Claims:
        </p>
        {claims.map((claim, claimIndex) =>
            Object.keys(claim)
                .filter((field) => field !== "id")
                .map((field, i) => (
                    <div
                        key={`field${i}`}
                        className="text-md font-normal text-text-secondary-light dark:text-text-secondary-dark"
                    >
                        {field}
                        {claim[field] === "******" ? (
                            <button
                                onClick={() => {
                                    revealAttributes(credential, claimIndex, field);
                                }}
                                className="m-3 px-3 py-2 text-md font-medium text-center text-white bg-button-primary-light dark:bg-button-primary-dark rounded-lg hover:bg-button-primary-dark dark:hover:bg-button-primary-light focus:ring-4 focus:outline-none focus:ring-button-primary-light/30 dark:focus:ring-button-primary-dark/30"
                            >
                                Reveal
                            </button>
                        ) : (
                            <>: {claim[field]}</>
                        )}
                    </div>
                ))
        )}
    </div>
}
