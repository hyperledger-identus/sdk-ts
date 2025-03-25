import { useAgent } from "@/hooks";

import SDK from "@hyperledger/identus-sdk";



export function AgentStart() {
    const { state, start, stop } = useAgent()

    const handleStart = async () => {
        await start();
    };

    const handleStop = async () => {
        await stop();
    };

    if (state === SDK.Domain.Startable.State.STARTING) {
        return (
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Agent is starting</span>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.STOPPED) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Agent is stopped</span>
                </div>
                <button
                    onClick={handleStart}
                    className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Start Agent
                </button>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.RUNNING) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Agent is running</span>
                </div>
                <button
                    onClick={handleStop}
                    className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                >
                    Stop Agent
                </button>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.STOPPING) {
        return (
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>Agent is stopping</span>
            </div>
        )
    }
}