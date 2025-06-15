import SDK from "@hyperledger/identus-sdk";

export function DefaultMessage(props: { message: SDK.Domain.Message }) {
    const { message } = props;

    return <><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message ID</h3>
            <p className="text-sm font-mono break-all">{message.id}</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Protocol URI</h3>
            <p className="text-sm font-mono break-all">{message.piuri}</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">From</h3>
            <p className="text-sm font-mono break-all">{message.from?.toString() || 'N/A'}</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">To</h3>
            <p className="text-sm font-mono break-all">{message.to?.toString() || 'N/A'}</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Direction</h3>
            <p className="text-sm">{message.direction === SDK.Domain.MessageDirection.SENT ? 'Sent' : 'Received'}</p>
        </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Created Time</h3>
            <p className="text-sm">{new Date(message.createdTime * 1000).toLocaleString()}</p>
        </div>
    </div>
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Message Body</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                    {JSON.stringify(message.body, null, 2)}
                </pre>
            </div>
        </div>
        {
            message.attachments.length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Attachments</h3>
                    <div className="space-y-4">
                        {message.attachments.map((attachment, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Attachment {index + 1}</span>
                                        {attachment.mediaType && (
                                            <span className="text-xs text-gray-500">{attachment.mediaType}</span>
                                        )}
                                    </div>
                                    {attachment.description && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{attachment.description}</p>
                                    )}
                                    {attachment.filename && (
                                        <p className="text-sm font-mono">{attachment.filename}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        {
            Object.keys(message.extraHeaders).length > 0 && (
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Extra Headers</h3>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                        <pre className="text-sm font-mono whitespace-pre-wrap break-all">
                            {JSON.stringify(message.extraHeaders, null, 2)}
                        </pre>
                    </div>
                </div>
            )
        }
    </>
} 