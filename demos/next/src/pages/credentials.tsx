
import React, { useState } from "react";
import '../app/index.css'
import { FooterNavigation } from "@/components/FooterNavigation";
import { Box } from "@/app/Box";
import { useMountedApp } from "@/reducers/store";
import { DBConnect } from "@/components/DBConnect";

function protect(claims) {
    const newClaims: any[] = []
    claims.forEach((claim) => {
        const newClaim = {}
        Object.keys(claim).forEach((key) => {
            newClaim[key] = "******"
        })
        newClaims.push(newClaim)
    })
    return newClaims
}

function Credential({ credential }) {

    const [claims, setClaims] = useState(protect(credential.claims));

    function disclose(claimIndex, field) {
        const disclosed = claims.map((claim, index) => {
            if (claimIndex === index) {
                return {
                    ...claim,
                    [field]: credential.claims[index][field]
                }
            }
            return claim
        })
        setClaims(disclosed)
    }

    return <div
        className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
        <h1 className="mb-4 text-1xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Credential type {credential.credentialType}
        </h1>

        Credential contains claims
        {
            claims.map((claim, claimIndex) =>
                Object.keys(claim)
                    .filter((field) => field !== "id")
                    .map((field, i) => <p
                        key={`field${i}`}
                        className="text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                        {field}
                        {claim[field] === "******" ? <button
                            onClick={() => {
                                disclose(claimIndex, field)
                            }}
                            className="ml-3 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Disclose
                        </button> : <>: {claim[field]}</>}
                    </p>))
        }
    </div>
}

export default function App() {

    const app = useMountedApp();

    return (
        <>
            <div className="mx-10 mt-5 mb-30">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Credentials
                </h1>
                <DBConnect>
                    <Box>
                        {
                            app.credentials.length <= 0 ?
                                <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
                                    No credentials.
                                </p>
                                :
                                app.credentials.map((credential, i) => <Credential credential={credential} key={`credential${i}`} />)
                        }
                    </Box>
                </DBConnect>
            </div>
            <FooterNavigation />
        </>
    );
}