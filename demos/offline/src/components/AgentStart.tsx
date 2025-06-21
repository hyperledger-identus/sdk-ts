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
            <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <div className="w-2 h-2 bg-status-warning-light dark:bg-status-warning-dark rounded-full animate-pulse"></div>
                <span>Agent is starting</span>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.STOPPED) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    <div className="w-2 h-2 bg-status-error-light dark:bg-status-error-dark rounded-full"></div>
                    <span>Agent is stopped</span>
                </div>
                <button
                    onClick={handleStart}
                    className="px-3 py-1 text-sm font-medium text-white bg-button-primary-light dark:bg-button-primary-dark rounded-md hover:bg-button-primary-dark dark:hover:bg-button-primary-light transition-colors"
                >
                    Start Agent
                </button>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.RUNNING) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    <div className="w-2 h-2 bg-status-success-light dark:bg-status-success-dark rounded-full"></div>
                    <span>Agent is running</span>
                </div>
                <button
                    onClick={handleStop}
                    className="px-3 py-1 text-sm font-medium text-white bg-status-error-light dark:bg-status-error-dark rounded-md hover:bg-status-error-dark dark:hover:bg-status-error-light transition-colors"
                >
                    Stop Agent
                </button>
            </div>
        )
    }

    if (state === SDK.Domain.Startable.State.STOPPING) {
        return (
            <div className="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <div className="w-2 h-2 bg-status-warning-light dark:bg-status-warning-dark rounded-full animate-pulse"></div>
                <span>Agent is stopping</span>
            </div>
        )
    }
}