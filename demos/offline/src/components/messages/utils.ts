import { useAgent } from "@/hooks";
import SDK from "@hyperledger/identus-sdk";

export function useMessageStatus(message: SDK.Domain.Message) {
    const { messages } = useAgent();

    const messageThid = messages.find(({ message: appMessage }) => {
        if (!message.thid || !appMessage.thid) {
            return false;
        }
        if (appMessage.id === message.id) {
            return false;
        }
        const messageCreatedTime = message.createdTime;
        const appMessageCreatedTime = appMessage.createdTime;
        return appMessage.thid === message.thid && messageCreatedTime < appMessageCreatedTime
    })

    const hasResponse = messageThid?.message.direction === SDK.Domain.MessageDirection.RECEIVED;
    const hasAnswered = messageThid?.message.direction === SDK.Domain.MessageDirection.SENT;

    return {
        hasResponse,
        hasAnswered
    };
}