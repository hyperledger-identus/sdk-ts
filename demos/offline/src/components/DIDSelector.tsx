import { useEffect, useState } from "react";
import { useDatabase } from "@/hooks";
import { DIDAlias, GroupedDIDs } from "@/utils/types";

interface DIDSelectorProps {
    onSelectDID: (didItem: DIDAlias | null) => void;
    selectedDID?: string;
    label?: string;
    className?: string;
}

export function DIDSelector({
    onSelectDID,
    selectedDID,
    label = "Select a DID",
    className = ""
}: DIDSelectorProps) {
    const { db, getGroupedDIDs } = useDatabase();
    const [groupedDIDs, setGroupedDIDs] = useState<GroupedDIDs>({});
    const [error, setError] = useState<string | null>(null);
    const [flatDIDs, setFlatDIDs] = useState<DIDAlias[]>([]);
    const [initialSelectionDone, setInitialSelectionDone] = useState(false);

    useEffect(() => {
        if (db) {
            getGroupedDIDs()
                .then(({ prism = [], ...dids }) => {
                    const groupedData = {
                        prism,
                        ...dids
                    };
                    setGroupedDIDs(groupedData);

                    // Create a flat list of all DIDs for easier selection
                    const allDIDs = Object.values(groupedData).flat();
                    setFlatDIDs(allDIDs);

                    // If selectedDID is provided and we haven't done initial selection yet,
                    // find and select the matching DID
                    if (selectedDID && !initialSelectionDone) {
                        const matchingDID = allDIDs.find(
                            didItem => didItem.did.toString() === selectedDID
                        );
                        if (matchingDID) {
                            onSelectDID(matchingDID);
                        }
                        setInitialSelectionDone(true);
                    }
                })
                .catch((err) => {
                    setError(err.message);
                })
        }
    }, [db, onSelectDID, initialSelectionDone, selectedDID, getGroupedDIDs]);

    const handleDIDChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const didString = event.target.value;
        if (didString === "") {
            onSelectDID(null);
            return;
        }

        const selectedDIDItem = flatDIDs.find(
            didItem => didItem.did.toString() === didString
        );

        if (selectedDIDItem) {
            onSelectDID(selectedDIDItem);
        }
    };

    const hasAnyDIDs = flatDIDs.length > 0;

    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>

            {error ? (
                <div className="text-sm text-red-500">{error}</div>
            ) : !hasAnyDIDs ? (
                <div className="text-sm text-gray-500 dark:text-gray-400">No DIDs available</div>
            ) : (
                <select
                    className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleDIDChange}
                    value={selectedDID || ""}
                >
                    <option value="">Select a DID</option>

                    {Object.entries(groupedDIDs).map(([method, dids]) =>
                        dids.length > 0 && (
                            <optgroup key={`${method}-group`} label={`${method.toUpperCase()} DIDs`}>
                                {dids.map((didItem) => (
                                    <option
                                        key={didItem.did.toString()}
                                        value={didItem.did.toString()}
                                    >
                                        {didItem.alias || didItem.did.toString().substring(0, 16) + '...'}
                                    </option>
                                ))}
                            </optgroup>
                        )
                    )}
                </select>
            )}
        </div>
    );
} 