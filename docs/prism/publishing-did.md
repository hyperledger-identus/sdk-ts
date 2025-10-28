---
id: publishing-did
title: Publishing a did:prism on Cardano (End-to-End Guide)
---

Publishing a `did:prism` DID on the Cardano blockchain allows you to create a short-form DID that can be easily shared and resolved by others. This guide provides an end-to-end example of how to achieve this in a browser-based environment using React and the Mesh SDK.

## Prerequisites

*   A CIP30-compliant wallet extension installed in your browser (e.g., Eternl, Nami, or Flint).
*   Some ADA in your wallet to pay for transaction fees.
*   A [Blockfrost](https://blockfrost.io/dashboard) API key for a project on the Cardano Mainnet.

## Required Packages

First, you need to install the following packages in your project:

```bash
npm install @hyperledger/identus-sdk @meshsdk/core @meshsdk/react
```

## Environment Setup

Create a `.env.local` file in your project's root directory and add your Blockfrost API key:

```
NEXT_PUBLIC_BLOCKFROST_API_KEY=your_blockfrost_api_key
```

## End-to-End Example with React and Mesh

The following example demonstrates the complete process of creating and publishing a `did:prism` DID on Cardano using a React component and the Mesh SDK. This approach simplifies wallet interaction and transaction building.

To use this component, you must wrap your application with the `MeshProvider` from `@meshsdk/react`.

**Example `pages/_app.tsx`:**
```typescript
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
  );
}

export default MyApp;
```

**Example Publishing Component:**
```typescript
import React, { useState, useCallback } from "react";
import SDK from "@hyperledger/identus-sdk";
import { useWallet, CardWallet } from "@meshsdk/react";
import { Transaction } from "@meshsdk/core";

// Helper to split data into chunks for Cardano metadata
function splitStringIntoChunks(input: Uint8Array, chunkSize = 64): Uint8Array[] {
    const buffer = Buffer.from(input);
    const chunks: Uint8Array[] = [];
    for (let i = 0; i < buffer.length; i += chunkSize) {
        chunks.push(
            Uint8Array.from(buffer.slice(i, i + chunkSize))
        );
    }
    return chunks;
}

// Helper to check for transaction confirmation on Blockfrost
async function checkTransactionConfirmation(txHash: string) {
    // NOTE: This requires a Blockfrost API key to be configured in your environment
    const projectId = process.env.NEXT_PUBLIC_BLOCKFROST_API_KEY;
    if (!projectId) {
        throw new Error("Blockfrost API key is not configured.");
    }
    try {
        const response = await fetch(
            `https://cardano-mainnet.blockfrost.io/api/v0/txs/${txHash}`,
            {
                headers: { project_id: projectId },
            }
        );
        return response.ok;
    } catch (error) {
        console.error("Error checking transaction confirmation:", error);
        return false;
    }
}

export function PublishDidComponent() {
    const { wallet, connected } = useWallet();
    const [did, setDid] = useState<SDK.Domain.DID | null>(null);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [isPublishing, setIsPublishing] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const publishDid = useCallback(async () => {
        if (!connected || !wallet) {
            setError("Please connect a wallet first.");
            return;
        }

        setIsPublishing(true);
        setError(null);
        setTxHash(null);
        setIsConfirmed(false);

        try {
            // 1. Initialize Apollo and Castor
            const apollo = new SDK.Apollo();
            const castor = new SDK.Castor(apollo);

            // 2. Create a master key and a DID
            const masterPrivateKey = apollo.createPrivateKey({
                type: SDK.Domain.KeyTypes.EC,
                curve: SDK.Domain.Curve.SECP256K1,
                seed: Buffer.from(apollo.createRandomSeed().seed.value).toString("hex"),
            });
            
            const services: SDK.Domain.Service[] = []; // Add any services if needed
            const newDid = await castor.createPrismDID(masterPrivateKey, services);
            setDid(newDid);

            // 3. Prepare the metadata for the transaction
            const atalaObject = await castor.createPrismDIDAtalaObject(masterPrivateKey, newDid);
            const metadataBody = {
                v: 1,
                c: splitStringIntoChunks(atalaObject),
            };

            // 4. Build, sign, and submit the transaction with Mesh
            const tx = new Transaction({ initiator: wallet })
                .setMetadata(21325, metadataBody);

            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const submittedTxHash = await wallet.submitTx(signedTx);
            setTxHash(submittedTxHash);

            // 5. Wait for confirmation
            console.log(`Transaction submitted. Hash: ${submittedTxHash}. Waiting for confirmation...`);
            let confirmed = false;
            while (!confirmed) {
                await new Promise(resolve => setTimeout(resolve, 15000)); // Wait 15s
                confirmed = await checkTransactionConfirmation(submittedTxHash);
            }
            
            setIsConfirmed(true);
            console.log("Transaction confirmed! DID published successfully.");

        } catch (err) {
            console.error(err);
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsPublishing(false);
        }
    }, [wallet, connected]);

    return (
        <div>
            <h2>Publish a did:prism DID</h2>
            {!connected ? (
                <CardWallet />
            ) : (
                <button onClick={publishDid} disabled={isPublishing}>
                    {isPublishing ? "Publishing..." : "Create and Publish DID"}
                </button>
            )}

            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            
            {did && <p>DID created: {did.toString()}</p>}

            {txHash && (
                <div>
                    <p>Transaction Hash: {txHash}</p>
                    <p>
                        <a href={`https://cardanoscan.io/transaction/${txHash}`} target="_blank" rel="noopener noreferrer">
                            View on Cardanoscan
                        </a>
                    </p>
                </div>
            )}
            
            {isPublishing && !isConfirmed && <p>Waiting for transaction confirmation...</p>}
            {isConfirmed && <p style={{ color: "green" }}>DID Published Successfully!</p>}
        </div>
    );
}
```

### Explanation of the Code

This example provides a self-contained React component, `PublishDidComponent`, that handles the entire lifecycle of creating and publishing a `did:prism`.

1.  **Component Setup and Helpers:**
    *   The component uses React state to manage the DID, transaction status, and any potential errors.
    *   It uses the `useWallet` hook from `@meshsdk/react` to get the connected wallet's state and instance.
    *   `splitStringIntoChunks` is a helper function to correctly format the DID operation data for Cardano's transaction metadata.
    *   `checkTransactionConfirmation` is a helper to poll the Blockfrost API and verify when the transaction is confirmed on the blockchain.

2.  **`publishDid` Function:** This is the core logic, triggered by a button click.
    *   **Initialization:** It initializes the `Apollo` and `Castor` modules from the Atala PRISM SDK.
    *   **DID Creation:** It creates a new master private key and uses it to generate a new, unpublished `did:prism`.
    *   **Metadata Preparation:** It calls `createPrismDIDAtalaObject` to generate the specific data structure required for the publication operation. This data is then chunked for the metadata.
    *   **Transaction with Mesh:** It uses Mesh's `Transaction` builder, which provides a simple and elegant API. It sets the metadata for the transaction using the standard label for PRISM DID operations (`21325`).
    *   **Signing and Submission:** The transaction is built, signed by the user through their connected wallet, and submitted to the blockchain.
    *   **Confirmation:** The component then polls for confirmation and updates the UI to reflect the successful publication.

3.  **User Interface:**
    *   It renders Mesh's `CardWallet` component to allow users to easily connect their CIP30 wallet.
    *   Once connected, it displays a button to initiate the publishing process.
    *   It provides real-time feedback to the user, showing the created DID, transaction hash, and final confirmation status.

After the transaction is confirmed, your `did:prism` is published on the Cardano blockchain, and its short-form DID can be resolved by anyone.
