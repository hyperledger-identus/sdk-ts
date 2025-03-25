import { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { usePrismDID, useDatabase } from "@/hooks";




export function PrismDIDSelect() {
    const { db } = useDatabase();
    const [dids, setDIDs] = useState<Pick<SDK.Domain.PrismDID, "did" | "alias">[]>([]);
    const { did: selectedDID, setDID } = usePrismDID();

    useEffect(() => {
        if (db) {
            db.getExtendedDIDs().then((dids) => {
                const data = dids.reduce<Pick<SDK.Domain.PrismDID, "did" | "alias">[]>((dids, prismDID) => {
                    if (prismDID.status === "published") {
                        const found = dids.find(d => d.did.toString() === prismDID.did.toString());
                        if (!found) {
                            dids.push({ did: prismDID.did, alias: prismDID.alias });
                        }
                    }
                    return dids
                }, [])
                return setDIDs(data)
            });
        }
    }, [db]);

    if (dids.length === 0) {
        return <div className="text-gray-500 dark:text-gray-400 px-4 py-3">
            No DIDs found
        </div>
    }

    return <select
        value={selectedDID?.toString() ?? ""}
        onChange={(e) => setDID(e.target.value)}
        className="block w-56 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
    >
        {dids.map(({ did, alias }) => {
            const didString = did.toString();
            return <option key={didString} value={didString}>
                {alias ?? didString.slice(0, 5) + "..."}
            </option>
        })}
    </select>
}
