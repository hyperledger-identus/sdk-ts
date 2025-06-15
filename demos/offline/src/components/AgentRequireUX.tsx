import { useAgent } from "@/hooks";
import SDK from "@hyperledger/identus-sdk";
import React from "react";

interface AgentRequireUXProps {
    hide?: boolean;
    children: React.ReactNode;
    text?: string;
}

type DisableableElement = React.ReactElement<{ disabled?: boolean }>;

export function AgentRequireUX({ children, text, hide }: AgentRequireUXProps) {
    const { agent } = useAgent();
    if (agent && agent.state === SDK.Domain.Startable.State.RUNNING) {
        return <>{children}</>;
    }


    // Function to recursively clone children with disabled prop set to true
    const disableInputs = (child: React.ReactNode): React.ReactNode => {
        // If the child is not a valid React element, return as is
        if (!React.isValidElement(child)) {
            return child;
        }

        // If the child is an input element, clone it with disabled prop set to true
        if (child.type === 'input' || child.type === 'button') {
            if (hide) {
                return null;
            }
            return React.cloneElement(child as DisableableElement, { disabled: true });
        }

        // If the child has children, recursively iterate over its children
        const childProps = child.props as { children?: React.ReactNode };
        if (childProps.children) {
            return React.cloneElement(
                child,
                {},
                React.Children.map(childProps.children, disableInputs)
            );
        }

        // Otherwise, return the child as is
        return child;
    };

    // Clone the children with disabled prop set to true
    const disabledChildren = React.Children.map(children, disableInputs);
    return (
        <>
            {disabledChildren}
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">Agent required</span> {text || 'You cannot respond to messages while the agent is not running.'}
            </div>
        </>
    );
}