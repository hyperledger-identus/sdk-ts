import SDK from "@hyperledger/identus-sdk";
import { useEffect, useState } from "react";
import { useAgent } from "@/hooks";
import { useMessageStatus } from "./utils";

export function BasicMessage(props: { message: SDK.Domain.Message }) {
    const { message } = props;
    const { agent } = useAgent();
    const { hasResponse, hasAnswered } = useMessageStatus(message);
    const [response, setResponse] = useState<string>("");
    const [isAnswering, setIsAnswering] = useState(false);

    useEffect(() => {
        if (hasAnswered) {
            setIsAnswering(false);
        }
    }, [hasAnswered])

    const parsed = { ...message };
    if (typeof parsed.body === "string") {
        (parsed as any).body = JSON.parse(parsed.body);
    }

    const attachments = message.attachments.reduce((acc, x) => {
        if ("base64" in x.data) {
            if (x.format === "prism/jwt") {
                const decodedFirst = Buffer.from(x.data.base64, "base64").toString();
                const decoded = Buffer.from(decodedFirst.split(".")[1], "base64").toString();
                const parsed = JSON.parse(decoded);
                return acc.concat(parsed);
            }
            const decoded = Buffer.from(x.data.base64, "base64").toString();
            try {
                const parsed = JSON.parse(decoded);
                return acc.concat(parsed);
            } catch (err) {

            }
        }
        return acc;
    }, []);

    const handleSend = async () => {
        setIsAnswering(true);
        const text = response;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const from = message?.from as SDK.Domain.DID;
        const to = message?.to as SDK.Domain.DID;
        const thid = message?.thid || message?.id;
        try {
            if (!agent) {
                throw new Error("Start the agent first");
            }
            await agent.send(
                new SDK.BasicMessage(
                    { content: text },
                    to,
                    from,
                    thid
                ).makeMessage()

            );
        }
        catch (e) {
            console.log(e);
        }
    };

    const isReceived = message.direction !== SDK.Domain.MessageDirection.SENT;

    return <div
        className="w-full mt-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    >
        <div>
            <b>Basic Message: </b> {message.id} {message.direction === 1 ? 'received' : 'sent'}
            <p>from {message.from?.toString()}</p>
            <p>to {message.to?.toString()}</p>
            <pre style={{
                textAlign: "left",
                wordWrap: "break-word",
                wordBreak: "break-all",
                whiteSpace: "pre-wrap",
            }}
            >
                {JSON.stringify(parsed.body.content, null, 2)}
            </pre>
            {attachments.length > 0 && (
                <pre style={{
                    textAlign: "left",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap",
                }}
                >
                    <b>Attachments:</b>
                    {attachments.map(x => JSON.stringify(x, null, 2))}
                </pre>
            )}

        </div>
        {
            isAnswering && <>
                <div role="status">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </>
        }
        {
            !isAnswering && isReceived && !hasResponse && <>
                <input
                    className="block mt-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={response} placeholder="Your response" onChange={(e) => setResponse(e.target.value)} />

                <button className="mt-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" style={{ width: 120 }} onClick={() => {
                    handleSend();
                }}>Respond</button>
            </>
        }
    </div>;
} 