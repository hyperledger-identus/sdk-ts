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
    const { getMediator, getSeed, getWallet, state: dbState, db, error: dbError } = useDatabase();
    const router = useRouter();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [mediatorDID, setMediatorDID] = useState<SDK.Domain.DID | null>(null);
    const { connect } = useWallet();

    const currentRoute = router.pathname;
    useEffect(() => {
        async function load() {
            if (dbState === 'loaded' && !dbError) {
                const seed = await getSeed();
                if (currentRoute !== "/app/mnemonics" && !seed) {
                    router.replace("/app/mnemonics");
                    return
                }
                const storedMediatorDID = await getMediator();
                if (currentRoute !== "/app/mediator" && seed && !storedMediatorDID) {
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
        }
        load().then(() => setLoaded(true))
    }, [dbState, dbError, currentRoute, getMediator, getSeed, getWallet, connect, router]);

    if (!loaded) {
        return <Loading />
    }

    return <PrismDIDProvider did={mediatorDID}>{children}</PrismDIDProvider>
} 