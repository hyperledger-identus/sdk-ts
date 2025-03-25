import React, { useEffect, useState } from 'react';
import SDK from '@hyperledger/identus-sdk';
import { useRouter } from 'next/router';
import Loading from './Loading';
import { useWallet } from "@meshsdk/react";
import { useDatabase } from '@/hooks';
import { PrismDIDProvider } from './providers/PrismDID';

interface RequireDBProps {
    children: React.ReactNode;
}


export default function AgentRequire({ children }: RequireDBProps) {
    const { db, getMediator, getSeed, getWallet } = useDatabase();
    const router = useRouter();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [mediatorDID, setMediatorDID] = useState<SDK.Domain.DID | null>(null);
    const { connect } = useWallet();
    const currentRoute = router.pathname;
    useEffect(() => {
        async function load() {
            if (currentRoute !== "/app/auth" && !db) {
                await router.replace("/app/auth");
                return;
            }
            const seed = await getSeed();
            if (currentRoute !== "/app/mnemonics" && db && !seed) {
                router.replace("/app/mnemonics");
                return
            }
            const storedMediatorDID = await getMediator();
            if (currentRoute !== "/app/mediator" && db && seed && !storedMediatorDID) {
                router.replace("/app/mediator");
                return
            }

            const walletId = await getWallet();
            if (walletId) {
                await connect(walletId);
            }

            if (storedMediatorDID) {
                setMediatorDID(storedMediatorDID);
            }
        }
        load().then(() => setLoaded(true))
    }, []);

    if (!loaded) {
        return <Loading />
    }

    return <PrismDIDProvider did={mediatorDID}>{children}</PrismDIDProvider>
} 