import { useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { PrismDIDContext } from "@/context";

export function PrismDIDProvider({ children, did: initialDid }: { children: React.ReactNode, did: SDK.Domain.DID | null }) {
    const [did, setDidState] = useState<SDK.Domain.DID | null>(initialDid);
    const setDID = (didString: string) => {
        const didInstance = SDK.Domain.DID.fromString(didString);
        setDidState(didInstance);
    };
    return <PrismDIDContext.Provider value={{ did, setDID }}> {children} </PrismDIDContext.Provider>
}
