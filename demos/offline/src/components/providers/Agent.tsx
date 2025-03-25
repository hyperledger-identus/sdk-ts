import { useEffect, useState } from "react";
import SDK from "@hyperledger/identus-sdk";
import { AgentContext } from "@/context";
import { useDatabase } from "@/hooks";
import { ResolverClass, createResolver } from "@/utils/resolvers";

export function AgentProvider({ children }: { children: React.ReactNode }) {
    const [agent, setAgent] = useState<SDK.Agent | null>(null);
    const { db, getMediator, getSeed, getResolverUrl } = useDatabase();
    const [state, setState] = useState<SDK.Domain.Startable.State>(SDK.Domain.Startable.State.STOPPED);

    async function start() {
        if (!db) {
            throw new Error("No db found");
        }
        const seed = await getSeed();
        if (!seed) {
            throw new Error("No seed found");
        }
        const apollo = new SDK.Apollo();
        const mediatorDID = await getMediator() ?? undefined;
        const resolverUrl = await getResolverUrl();
        const resolvers: ResolverClass[] = [];
        if (resolverUrl) {
            resolvers.push(createResolver(resolverUrl))
        }
        const castor = new SDK.Castor(apollo, resolvers);
        const agent = await SDK.Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto: db.pluto,
            seed,
        });
        await agent.start()
        setAgent(agent);
    }

    async function stop() {
        await agent?.stop();
        setAgent(null);
    }

    useEffect(() => {
        setState(agent?.state || SDK.Domain.Startable.State.STOPPED);
    }, [agent?.state]);

    useEffect(() => {
        async function startAgent() {
            if (db) {
                const seed = await getSeed();
                if (seed) {
                    await start();
                }
            }
        }
        startAgent();
    }, [db]);
    return <AgentContext.Provider value={{ agent, setAgent, start, stop, state }}> {children} </AgentContext.Provider>
}
