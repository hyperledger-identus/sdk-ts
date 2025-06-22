import SDK from "@hyperledger/identus-sdk";
import { RIDB, StorageType } from "@trust0/ridb";
import { createStore } from "@trust0/identus-store";
import { v4 as uuidv4 } from 'uuid';
import { base64 } from 'multiformats/bases/base64';

/** @type {Object} */
const collections = SDK.makeCollections();

/**
 * Migrates schema with properties to include version and encrypted fields
 * @param {Object} schemaWithProperties - Schema object with properties
 * @param {Object} properties - Additional properties to merge
 * @returns {Object} Migrated schema object
 */
function migrateSchema(schemaWithProperties, properties) {
    const { properties: schemaProperties, ...schemaWithoutProperties } = schemaWithProperties;
    return {
        ...schemaWithoutProperties,
        version: 0,
        encrypted: schemaWithoutProperties.encrypted || [],
        properties: Object.fromEntries(
            Object.entries({
                ...schemaProperties,
                ...properties
            }).map(([key, value]) => {
                const propValue = { ...value };
                propValue.required = propValue?.required === true;
                propValue.maxLength = undefined;
                return [key, propValue];
            })
        )
    }
}

/**
 * Extracts schemas from collections
 * @param {Object} collections - Collections object
 * @returns {Object} Extracted schemas object
 */
function extractSchemas(collections) {
    const result = {};
    for (const key in collections) {
        if (Object.prototype.hasOwnProperty.call(collections, key)) {
            result[key] = migrateSchema(collections[key].schema, {});
        }
    }
    return result;
}

/** @type {Object} */
const schemas = extractSchemas(collections)

/** @type {string} */
const mediatorDID = 'did:peer:2.Ez6LSr75gLoSwaVHS7MTzcKLXjt9onJMXY9aVEBGWY8ahWPdn.Vz6Mkw5SdxCCxRTfHx1LaGvh2e5JWPWJs7Ek6mjiPXRxqnYHT.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6Imh0dHBzOi8vbWVkaWF0b3IudHJ1c3QwLmlkIiwiYSI6WyJkaWRjb21tL3YyIl19fQ.SeyJ0IjoiZG0iLCJzIjp7InVyaSI6IndzOi8vbWVkaWF0b3IudHJ1c3QwLmlkL3dzIiwiYSI6WyJkaWRjb21tL3YyIl19fQ';

(async () => {

    /**
     * Creates a new agent instance with database and store
     * @param {string} name - Instance name
     * @returns {Promise<{agent: SDK.Agent, db: RIDB}>} Agent and database instance
     */
    const createInstance = async (name) => {
        /** @type {RIDB} */
        const db = new RIDB({
            dbName: name,
            schemas: schemas
        });
        /** @type {Object} */
        const store = createStore({ db, storageType: StorageType.InMemory });
        /** @type {SDK.Apollo} */
        const apollo = new SDK.Apollo();
        /** @type {SDK.Pluto} */
        const pluto = new SDK.Pluto(store, apollo);
        /** @type {SDK.Castor} */
        const castor = new SDK.Castor(apollo, []);
        /** @type {Uint8Array} */
        const seed = apollo.createRandomSeed().seed;
        /** @type {SDK.Agent} */
        const agent = await SDK.Agent.initialize({
            apollo,
            castor,
            mediatorDID,
            pluto,
            seed,
        });
        console.log('Starting instance', name);
        await agent.start();
        console.log('Started instance', name);
        return { agent, db };
    };

    /**
     * Creates a new Prism DID for the agent
     * @param {SDK.Agent} agent - The agent instance
     * @returns {Promise<SDK.Domain.DID>} Created Prism DID
     */
    const createPrismDID = async (agent) => {
        /** @type {SDK.Tasks.CreatePrismDID} */
        const issuerDIDTask = new SDK.Tasks.CreatePrismDID({
            authenticationKeyCurve: SDK.Domain.Curve.SECP256K1,
            services: [],
            alias: 'issuer-did'
        });
        /** @type {SDK.Domain.DID} */
        const issuerDID = await agent.runTask(issuerDIDTask);
        return issuerDID;
    }

    /**
     * Creates an out-of-band (OOB) JSON offer for credential issuance
     * @param {SDK.Agent} agent - The agent instance
     * @param {Object} request - Issuance request object
     * @param {string} request.id - Request ID
     * @param {Array<Object>} request.claims - Array of claims
     * @param {SDK.Domain.DID} peerDID - Peer DID for the offer
     * @returns {Promise<string>} OOB offer JSON string
     */
    const createOOBJSONOffer = async (agent, request) => {
        const peerDID = await agent.createNewPeerDID();
        /** @type {SDK.Tasks.CreateOOBOffer} */
        const oobTask = new SDK.Tasks.CreateOOBOffer({
            from: peerDID,
            offer: new SDK.OfferCredential(
                {
                    goal_code: "Offer Credential",
                    credential_preview: {
                        type: SDK.ProtocolType.DidcommCredentialPreview,
                        body: {
                            attributes: request.claims.map((claim) => ({ name: claim.name, value: claim.value })),
                        },
                    },
                },
                [
                    new SDK.Domain.AttachmentDescriptor(
                        {
                            json: {
                                id: uuidv4(),
                                media_type: "application/json",
                                options: {
                                    challenge: uuidv4(),
                                    domain: 'localhost',
                                },
                                thid: request.id,
                                presentation_definition: {
                                    id: uuidv4(),
                                    input_descriptors: [],
                                    format: {
                                        jwt: {
                                            alg: ["ES256K"],
                                            proof_type: [],
                                        },
                                    },
                                },
                                format: "prism/jwt",
                                piuri: SDK.ProtocolType.DidcommOfferCredential,
                            },
                        },
                        "application/json",
                        request.id,
                        undefined,
                        "prism/jwt"
                    )
                ],
                undefined,
                undefined,
                request.id
            )
        });
        /** @type {string} */
        const oob = await agent.runTask(oobTask);
        /** @type {Uint8Array} */
        const oobDecoded = base64.baseDecode(oob);
        /** @type {string} */
        const oobJson = Buffer.from(oobDecoded).toString();
        return oobJson;
    }

    /**
     * Parses an OOB offer JSON string to extract the message
     * @param {string} oobOfferJson - OOB offer JSON string
     * @param {SDK.Domain.DID} peerDID - Peer DID for the offer
     * @returns {SDK.Domain.Message} Parsed message object
     */
    const parseOOBOffer = (oobOfferJson, peerDID) => {
        /** @type {SDK.Domain.Message} */
        const message = SDK.Domain.Message.fromJson(oobOfferJson);
        /** @type {Object} */
        const attachment = message.attachments.at(0)?.payload;
        return SDK.Domain.Message.fromJson({
            ...attachment,
            from: message.from,
            to: peerDID,
        })
    }

    /**
     * Accepts a credential offer from an OOB offer
     * @param {SDK.Agent} agent - The holder agent
     * @param {string} oobOfferJson - OOB offer JSON string
     * @returns {Promise<void>}
     */
    const acceptCredentialOffer = async (agent, oobOfferJson) => {
        const peerDID = await agent.createNewPeerDID();
        /** @type {SDK.Domain.Message} */
        const credentialOffer = parseOOBOffer(
            oobOfferJson,
            peerDID
        );
        const credentialOfferMessage = SDK.OfferCredential.fromMessage(
            credentialOffer
        );
        /** @type {Object} */
        const requestCredential = await agent.handle(credentialOfferMessage.makeMessage());
        /** @type {SDK.Domain.Message} */
        const requestMessage = requestCredential.makeMessage()
        await agent.send(requestMessage);
    }

    /**
     * Waits for a specific message type from an agent
     * @param {SDK.Agent} agent - The agent to listen to
     * @param {string} type - Message type to wait for
     * @param {number} timeout - Timeout in milliseconds (default: 30000)
     * @returns {Promise<SDK.Domain.Message>} Promise that resolves with the message
     */
    const waitForMessage = (agent, type, timeout = 30000) => {
        return new Promise((resolve, reject) => {
            let timeoutId;
            let listenerRemoved = false;

            const messageListener = (messages) => {
                console.log(type, 'Found messages', messages);

                const found = messages.find((message) => message.piuri === type);
                if (found) {
                    cleanup();
                    resolve(found);
                }
            };

            const cleanup = () => {
                if (!listenerRemoved) {
                    agent.removeListener(SDK.ListenerKey.MESSAGE, messageListener);
                    listenerRemoved = true;
                }
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            };

            // Set up timeout
            timeoutId = setTimeout(() => {
                cleanup();
                reject(new Error(`Timeout waiting for message type: ${type}`));
            }, timeout);

            agent.addListener(SDK.ListenerKey.MESSAGE, messageListener);
        });
    }


    /**
    * Converts the credential request message and issues the credential to holder
    * @param {SDK.Agent} agent - The issuer agent
    * @param {SDK.Domain.Message} message - Message to issue
    * @param {Array<Object>} claims - Claims to include in the credential
    * @param {SDK.Domain.DID} issuerDID - The issuer DID
    * @returns {Promise<void>} Promise that resolves when credential is issued
    */
    const issueCredential = async (agent, message, claims, issuerDID, holderDID) => {
        const protocol = new SDK.Tasks.RunProtocol({
            type: 'credential-request',
            pid: SDK.ProtocolType.DidcommRequestCredential,
            data: {
                issuerDID,
                holderDID,
                message,
                format: SDK.Domain.CredentialType.JWT,
                claims,
            }
        })
        const issued = await agent.runTask(protocol);
        await agent.send(issued.makeMessage());
    }

    /**
     * Converts the credential request message and issues the credential to holder
     * @param {SDK.Agent} agent - The issuer agent
     * @param {SDK.Domain.CredentialType.JWT} type - Presentation type
     * @param {SDK.Domain.DID} toDID - The holder's DID
     * @param {SDK.Domain.PresentationClaims<SDK.Domain.CredentialType>} claims - Claims to include in the presentation
     * @returns {Promise<void>} Promise that resolves when credential is issued
     */
    const issuePresentationRequest = async (agent, type, toDID, claims) => {
        const task = new SDK.Tasks.CreatePresentationRequest({ type, toDID, claims })
        const requestPresentation = await agent.runTask(task);
        const requestPresentationMessage = requestPresentation.makeMessage();
        await agent.send(requestPresentationMessage);
    }

    /**
     * Converts the credential request message and issues the credential to holder
     * @param {SDK.Agent} agent - The issuer agent
     * @param {SDK.Domain.Message} message - The presentation request message
     * @param {SDK.Domain.Credential} credential - The credential to include in the presentation
     * @returns {Promise<void>} Promise that resolves when credential is issued
     */
    const handlePresentationRequest = async (agent, message, credential) => {
        const request = SDK.RequestPresentation.fromMessage(message);
        const task = new SDK.Tasks.CreatePresentation({ request, credential })
        const presentation = await agent.runTask(task);
        const presentationMessage = presentation.makeMessage();
        await agent.send(presentationMessage);
    }

    /**
     * Converts the credential request message and issues the credential to holder
     * @param {SDK.Agent} agent - The issuer agent
     * @param {SDK.Domain.Message} message - The presentation request message
     * @returns {Promise<SDK.Domain.Credential>} Promise that resolves when credential is issued
     */
    const extractCredential = async (agent, message) => {
        const protocol = new SDK.Tasks.RunProtocol({
            type: 'credential-issue',
            pid: SDK.ProtocolType.DidcommIssueCredential,
            data: { message }
        });
        const credential = await agent.runTask(protocol);
        return credential;
    }

    /**
    * Converts the credential request message and issues the credential to holder
    * @param {SDK.Agent} agent - The issuer agent
    * @param {SDK.Domain.Message} message - The presentation request message
    * @returns {Promise<boolean>} Promise that resolves when credential is issued
    */
    const verifyPresentation = async (agent, message) => {
        return agent.handle(message)
    }

    try {
        const { agent: issuer } = await createInstance('issuer');
        const { agent: holder } = await createInstance('holder');

        const issuerDID = await createPrismDID(issuer);
        const holderDID = await createPrismDID(holder);

        const issuanceRequest = {
            id: '12345',
            claims: [
                {
                    name: 'name',
                    value: 'John Doe',
                    type: 'string'
                }
            ],
            credentialFormat: SDK.Domain.CredentialType.JWT,
            automaticIssuance: true,
            issuingDID: issuerDID.toString(),
            status: 'pending'
        };

        /** @type {string} */
        const oobOfferJson = await createOOBJSONOffer(
            issuer,
            issuanceRequest
        );

        // Set up listeners for both request and credential issuance completion
        const credentialRequestPromise = waitForMessage(
            issuer,
            SDK.ProtocolType.DidcommRequestCredential
        );
        const credentialIssuedPromise = waitForMessage(
            holder,
            SDK.ProtocolType.DidcommIssueCredential
        );

        console.log('Holder Accepting credential offer...');
        await acceptCredentialOffer(
            holder,
            oobOfferJson
        );

        console.log('Issuer Waiting for credential request...');
        const credentialRequestMessage = await credentialRequestPromise;
        console.log('Issuing credential...', credentialRequestMessage);

        await issueCredential(
            issuer,
            credentialRequestMessage,
            issuanceRequest.claims,
            issuerDID,
            holderDID
        );


        const credentialMessage = await credentialIssuedPromise;
        const credential = await extractCredential(holder, credentialMessage);
        console.log('Credential issuance completed successfully!', credential);


        const presentationRequestPromise = waitForMessage(
            holder,
            SDK.ProtocolType.DidcommRequestPresentation
        )
        await issuePresentationRequest(
            issuer,
            SDK.Domain.CredentialType.JWT,
            credentialMessage.to,
            {
                issuerDID: issuerDID.toString(),
                holderDID: holderDID.toString(),
                claims: {
                    name: {
                        type: 'string',
                        pattern: 'John Doe'
                    }
                }
            }
        )


        const presentationRequestMessage = await presentationRequestPromise;
        console.log('Presentation request message', presentationRequestMessage);

        const issuerPresentationPromise = waitForMessage(
            issuer,
            SDK.ProtocolType.DidcommPresentation
        )
        await handlePresentationRequest(
            holder,
            presentationRequestMessage,
            credential
        )

        const presentationMessage = await issuerPresentationPromise;
        console.log('Presentation message', presentationMessage);

        const verify = await verifyPresentation(issuer, presentationMessage)
        console.log('Presentation verified', verify);


    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})()

