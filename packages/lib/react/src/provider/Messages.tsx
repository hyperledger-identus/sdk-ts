import { Domain, ListenerKey, ProtocolType } from "@hyperledger/identus-sdk";
import React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { MessagesContext } from "../context";
import { useAgent, useCredentials, useDatabase } from "../hooks";

type MessageWithReadStatus = {
	message: Domain.Message;
	read: boolean;
};

// Protocol types for pickup and message delivery that should be marked as read
const PICKUP_DELIVERY_PROTOCOLS: string[] = [
	ProtocolType.PickupRequest,
	ProtocolType.PickupDelivery,
	ProtocolType.PickupStatus,
	ProtocolType.PickupReceived,
	ProtocolType.LiveDeliveryChange,
];

// Helper function to check if a message is pickup/delivery related
const isPickupDeliveryMessage = (message: Domain.Message): boolean => {
	const isPickupDelivery = PICKUP_DELIVERY_PROTOCOLS.includes(message.piuri);
	return isPickupDelivery;
};

export function MessagesProvider({ children }: { children: React.ReactNode }) {
	const { agent, state: agentState } = useAgent();
	const {
		readMessage: readMessageDB,
		deleteMessage: deleteMessageDB,
		getMessages: getMessagesDB,
		state: dbState,
	} = useDatabase();

	const { load: loadCredentials } = useCredentials();

	const [isLoaded, setIsLoaded] = useState(false);
	const [messages, setMessages] = useState<MessageWithReadStatus[]>([]);

	// Use refs to store latest values for stable callback
	const agentRef = useRef(agent);
	const agentStateRef = useRef(agentState);
	const loadCredentialsRef = useRef(loadCredentials);

	// Update refs when values change
	useEffect(() => {
		agentRef.current = agent;
	}, [agent]);

	useEffect(() => {
		agentStateRef.current = agentState;
	}, [agentState]);

	useEffect(() => {
		loadCredentialsRef.current = loadCredentials;
	}, [loadCredentials]);

	const unreadMessages = useMemo(() => {
		const filtered = messages
			.filter(
				({ read, message }) =>
					!read && message.direction === Domain.MessageDirection.RECEIVED,
			)
			.map(({ message }) => message);
		return filtered;
	}, [messages]);

	const receivedMessages = useMemo(() => {
		const filtered = messages
			.filter(
				({ message }) =>
					message.direction === Domain.MessageDirection.RECEIVED,
			)
			.map(({ message }) => message);
		return filtered;
	}, [messages]);

	const sentMessages = useMemo(() => {
		const filtered = messages
			.filter(
				({ message }) => message.direction === Domain.MessageDirection.SENT,
			)
			.map(({ message }) => message);
		return filtered;
	}, [messages]);

	// Initial fetch of messages from database
	const load = useCallback(async () => {
		if (dbState === "loaded") {

			const dbMessages = await getMessagesDB();

			// Filter out pickup/delivery messages entirely
			const filteredMessages = dbMessages.filter(({ message }) => {
				const shouldInclude = !isPickupDeliveryMessage(message);
				return shouldInclude;
			});

			const parsedMessages = filteredMessages.map(({ message, read }) => {
				const finalRead =
					message.direction === Domain.MessageDirection.SENT
						? true
						: read;
				return {
					message,
					read: finalRead,
				};
			});

			setMessages((prevMessages) => {
				const messageMap = new Map<string, MessageWithReadStatus>();
				const getKey = (message: Domain.Message) => message.uuid || message.id;

				parsedMessages.forEach(msg => {
					messageMap.set(getKey(msg.message), msg);
				});

				prevMessages.forEach(prevMsg => {
					const key = getKey(prevMsg.message);
					if (!messageMap.has(key)) {
						messageMap.set(key, prevMsg);
					}
				});

				return Array.from(messageMap.values());
			});

		}
	}, [getMessagesDB, dbState]);

	// Stable callback that uses refs to access latest values
	const stableHandleNewMessages = useCallback(
		async (newMessages: Domain.Message[]) => {
			if (
				agentRef.current &&
				agentStateRef.current === Domain.Startable.State.RUNNING
			) {
				const credentialMessages = newMessages.filter(
					(message) =>
						message.piuri === ProtocolType.DidcommIssueCredential,
				);
				await Promise.all(
					credentialMessages.map(async (message) => {
						return agentRef.current?.handle(message);
					}),
				);

				await loadCredentialsRef.current();
			}

			setMessages((prev) => {
				const updatedMessages = [...prev];

				newMessages.forEach((newMessage) => {
					// Skip pickup/delivery messages entirely
					if (isPickupDeliveryMessage(newMessage)) {
						return;
					}

					const existingIndex = updatedMessages.findIndex(
						(item) =>
							item.message.id === newMessage.id ||
							item.message.uuid === newMessage.uuid,
					);

					if (existingIndex !== -1) {
						const previousRead = updatedMessages[existingIndex].read;
						const newRead =
							newMessage.direction === Domain.MessageDirection.RECEIVED
								? previousRead
								: true;

						updatedMessages[existingIndex] = {
							message: newMessage,
							read: newRead,
						};
					} else {
						const newRead =
							newMessage.direction === Domain.MessageDirection.RECEIVED
								? false
								: true;
						updatedMessages.push({
							message: newMessage,
							read: newRead,
						});
					}
				});

				return updatedMessages;
			});
		},
		[],
	); // Empty dependency array since we use refs

	// Mark message as read - update both DB and local state
	const readMessage = useCallback(
		async (message: Domain.Message) => {

			await readMessageDB(message);

			// Update local state immediately without refetching
			setMessages((prev) => {
				const updated = prev.map((item) => {
					if (
						item.message.id === message.id ||
						item.message.uuid === message.uuid
					) {
						return { ...item, read: true };
					}
					return item;
				});
				return updated;
			});

		},
		[readMessageDB],
	);

	// Delete message - remove from both DB and local state
	const deleteMessage = useCallback(
		async (message: Domain.Message) => {

			await deleteMessageDB(message);

			setMessages((prev) => {
				const filtered = prev.filter(
					(item) =>
						item.message.id !== message.id &&
						item.message.uuid !== message.uuid,
				);
				return filtered;
			});

		},
		[deleteMessageDB],
	);

	// Initial load effect
	useEffect(() => {
		if (dbState === "loaded" && !isLoaded) {
			load().then(() => setIsLoaded(true)).catch(() => setIsLoaded(false));
		}
	}, [load, dbState, isLoaded]);

	// Set up real-time message listener with stable callback
	useEffect(() => {
		if (agentState === Domain.Startable.State.RUNNING && agent) {
			agent.addListener(ListenerKey.MESSAGE, stableHandleNewMessages);

			return () => {
				agent.removeListener(ListenerKey.MESSAGE, stableHandleNewMessages);
			};
		}
		return () => { }
	}, [agent, agentState, stableHandleNewMessages]); // stableHandleNewMessages is now stable

	return (
		<MessagesContext.Provider
			value={{
				messages,
				unreadMessages,
				receivedMessages,
				sentMessages,
				readMessage,
				deleteMessage,
				load,
			}}
		>
			{children}
		</MessagesContext.Provider>
	);
}
