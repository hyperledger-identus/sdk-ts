import SDK from "@hyperledger/identus-sdk";

export function ConnectionResponse(props: { message: SDK.Domain.Message }) {
    const { message } = props;
    const parsed = { ...message };
    if (typeof parsed.body === "string") {
        (parsed as any).body = JSON.parse(parsed.body);
    }

    return <div
        className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
        <div>
            <b>Connection established: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
            <pre style={{
                textAlign: "left",
                wordWrap: "break-word",
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
            }}
            >
                {JSON.stringify(parsed.body, null, 2)}
            </pre>


        </div>

    </div>;
} 