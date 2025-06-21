import SDK from "@hyperledger/identus-sdk";

export function MessageTitle(props: { message: SDK.Domain.Message, title: string }) {
    const { message, title } = props;
    return <div className="text-xl font-bold">
        <b>{title}: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
    </div>;
} 