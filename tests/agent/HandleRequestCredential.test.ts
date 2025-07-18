import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from "../../src/domain";
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { mockTask } from '../testFns';
import { HandleRequestCredential } from '../../src/plugins/internal/didcomm/tasks/HandleRequestCredential';
import { IssueCredential } from '../../src/plugins/internal/didcomm/protocols/issueCredential/IssueCredential';
import { FindSigningKeys } from '../../src/edge-agent/didFunctions/FindDIDSigningKeys';
import { PluginManager } from '../../src/plugins';
import * as DIDComm from "../../src/plugins/internal/didcomm";
import { ProtocolType } from '../../src/edge-agent/types';
import Apollo from "../../src/apollo/Apollo";
import { createInstance } from '../fixtures/pluto';
import { CastorMock } from './mocks/CastorMock';
import { SDJWT } from '../../src/pollux/utils/jwt/SDJWT';
import { JWT } from '../../src/pollux/utils/jwt/JWT';

// Custom matcher helper for at least contains validation
const atLeastContains = (actual: any, expected: any): boolean => {
    if (typeof expected !== 'object' || expected === null) {
        return actual === expected;
    }

    if (Array.isArray(expected)) {
        return Array.isArray(actual) &&
            expected.every(item => actual.some(actualItem => atLeastContains(actualItem, item)));
    }

    return Object.keys(expected).every(key => {
        if (!(key in actual)) return false;
        return atLeastContains(actual[key], expected[key]);
    });
};

describe("HandleRequestCredential", () => {
    let ctx: Task.Context;
    let pluto: Domain.Pluto;
    let mockJWT: any;
    let mockSDJWT: any;
    let mockMessage: Domain.Message;
    let mockSigningKey: any;
    let mockPrivateKey: any;
    let mockPublicKey: any;
    let plugins: PluginManager;

    beforeEach(async () => {
        // Mock JWT service
        mockJWT = {
            signWithDID: vi.fn(),
            _context: undefined,
            sign: vi.fn(),
            runTask: vi.fn(),
            get context() {
                return this._context;
            },
            setContext(ctx: Task.Context) {
                this._context = ctx;
            },
        };


        // Mock SDJWT service
        mockSDJWT = {
            _context: undefined,
            sign: vi.fn(),
            runTask: vi.fn(),
            get context() {
                return this._context;
            },
            setContext(ctx: Task.Context) {
                this._context = ctx;
            },
        };

        mockPublicKey = {
            canVerify: vi.fn().mockReturnValue(true),
            isExportable: vi.fn().mockReturnValue(true),
            to: {
                Buffer: vi.fn().mockReturnValue(Fixtures.Keys.secp256K1.publicKey.raw),
                JWK: vi.fn().mockReturnValue(Fixtures.Keys.secp256K1.publicKey.to.JWK())
            },
            get kty() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().kty
            },
            get crv() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().crv
            },
            get x() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().x
            },
            get y() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().y
            }
        }

        // Mock private key
        mockPrivateKey = {
            isSignable: vi.fn().mockReturnValue(true),
            isExportable: vi.fn().mockReturnValue(true),
            sign: vi.fn(),
            publicKey: vi.fn().mockReturnValue(mockPublicKey),
            get kty() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().kty
            },
            get crv() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().crv
            },
            get d() {
                return Fixtures.Keys.secp256K1.publicKey.to.JWK().d
            }
        }


        // Mock signing key
        mockSigningKey = {
            privateKey: mockPrivateKey
        };
        const apollo = new Apollo();
        const instance = createInstance({
            apollo,
            name: "test",
        });
        pluto = instance.pluto;
        plugins = new PluginManager();
        plugins.register(DIDComm.plugin);

        // Create mock message
        mockMessage = new Domain.Message(
            {
                comment: "Test credential request",
                goal_code: "Request Credential"
            },
            "test-request-id",
            ProtocolType.DidcommRequestCredential,
            Fixtures.DIDs.peerDID1, // from (holder)
            Fixtures.DIDs.peerDID2, // to (issuer)
            [],
            "test-thread-id"
        );

        ctx = new Task.Context({
            Castor: CastorMock,
            Pluto: pluto,
            Plugins: plugins,
            JWT: mockJWT,
            SDJWT: mockSDJWT
        });

        await pluto.start()
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    describe("JWT Credential Format", () => {
        test("should create JWT credential with string claims", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" },
                { name: "age", value: "30", type: "number" },
                { name: "isStudent", value: "false", type: "boolean" },
                { name: "birthDate", value: "1990-01-01", type: "date" }
            ];

            const expectedJWT = "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.test-jwt-payload";
            mockJWT.signWithDID.mockResolvedValue(expectedJWT);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.JWT,
                claims: claims
            });

            const result = await ctx.run(task);

            expect(result).toBeInstanceOf(IssueCredential);
            expect(result.from).toEqual(Fixtures.DIDs.peerDID2);
            expect(result.to).toEqual(Fixtures.DIDs.peerDID1);
            expect(result.thid).toEqual("test-thread-id");
            expect(result.attachments).toHaveLength(1);
            expect(result.attachments[0].format).toEqual(Domain.CredentialType.JWT);

            // Verify JWT service was called with correct parameters
            const [actualDID, actualPayload] = mockJWT.signWithDID.mock.calls[0];

            const expectedPayload = {
                iss: Fixtures.DIDs.peerDID2.toString(),
                sub: Fixtures.DIDs.peerDID1.toString(),
                vc: {
                    credentialSubject: {
                        name: "John Doe",
                        age: 30,
                        isStudent: false,
                        birthDate: new Date("1990-01-01")
                    }
                }
            };

            expect(actualDID).toEqual(Fixtures.DIDs.peerDID2);
            expect(atLeastContains(actualPayload, expectedPayload)).toBe(true);
        });

        test("should handle various data types in claims", async () => {
            const claims = [
                { name: "stringField", value: "test", type: "string" },
                { name: "numberField", value: "42", type: "number" },
                { name: "booleanField", value: "true", type: "boolean" },
                { name: "dateField", value: "2023-01-01", type: "date" },
                { name: "unknownField", value: "value", type: "unknown" }
            ];

            mockJWT.signWithDID.mockResolvedValue("test-jwt");

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.JWT,
                claims: claims
            });

            await ctx.run(task);

            const [actualDID, actualPayload] = mockJWT.signWithDID.mock.calls[0];

            const expectedPayload = {
                vc: {
                    credentialSubject: {
                        stringField: "test",
                        numberField: 42,
                        booleanField: true,
                        dateField: new Date("2023-01-01"),
                        unknownField: "value"
                    }
                }
            };

            expect(actualDID).toEqual(Fixtures.DIDs.peerDID2);
            expect(atLeastContains(actualPayload, expectedPayload)).toBe(true);
        });
    });

    describe("SDJWT Credential Format", () => {
        test("should create SDJWT credential with default disclosure frame (no selective disclosure)", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" },
                { name: "age", value: "25", type: "number" }
            ];

            const expectedSDJWT = "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.test-sdjwt-payload~disclosure";
            mockSDJWT.sign.mockResolvedValue(expectedSDJWT);

            // Mock FindSigningKeys task
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            const result = await ctx.run(task);

            expect(result).toBeInstanceOf(IssueCredential);
            expect(result.from).toEqual(Fixtures.DIDs.peerDID2);
            expect(result.to).toEqual(Fixtures.DIDs.peerDID1);
            expect(result.thid).toEqual("test-thread-id");
            expect(result.attachments).toHaveLength(1);
            expect(result.attachments[0].format).toEqual(Domain.CredentialType.SDJWT);

            // Get the actual call arguments
            const callArgs = mockSDJWT.sign.mock.calls[0][0];

            // Validate using custom atLeastContains matcher
            const expectedPayload = {
                iss: Fixtures.DIDs.peerDID2.toString(),
                sub: Fixtures.DIDs.peerDID1.toString(),
                name: "John Doe",
                age: 25,
                vct: Fixtures.DIDs.peerDID2.toString()
            };

            expect(callArgs.issuerDID).toEqual(Fixtures.DIDs.peerDID2);
            expect(atLeastContains(callArgs.payload, expectedPayload)).toBe(true);
            expect(callArgs.disclosureFrame).toBeDefined(); // Disclosure frame is set by the implementation
        });

        test("should create SDJWT credential with selective disclosure for privacy protection", async () => {
            const claims = [
                { name: "firstName", value: "John", type: "string" },
                { name: "lastName", value: "Doe", type: "string" },
                { name: "email", value: "john.doe@example.com", type: "string" },
                { name: "age", value: "30", type: "number" }
            ];
            mockSDJWT.sign.mockResolvedValue("test-sdjwt-with-disclosure");
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await ctx.run(task);

            // Get the actual call arguments
            const callArgs = mockSDJWT.sign.mock.calls[0][0];

            // Validate using custom atLeastContains matcher
            const expectedPayload = {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@example.com",
                age: 30
            };

            expect(callArgs.issuerDID).toEqual(Fixtures.DIDs.peerDID2);
            expect(atLeastContains(callArgs.payload, expectedPayload)).toBe(true);
            expect(callArgs.disclosureFrame).toBeDefined(); // Disclosure frame is set by the implementation
        });

        test("should create SDJWT credential with complex disclosure frame for privacy scenarios", async () => {
            const claims = [
                { name: "fullName", value: "Alice Johnson", type: "string" },
                { name: "dateOfBirth", value: "1990-05-15", type: "date" },
                { name: "nationality", value: "US", type: "string" },
                { name: "licenseNumber", value: "DL123456789", type: "string" },
                { name: "address", value: "123 Main St, Anytown, USA", type: "string" },
                { name: "issuanceDate", value: "2024-01-01", type: "date" }
            ];

            // Complex disclosure frame for a driver's license scenario
            // This allows selective disclosure for privacy - holder can choose what to reveal
            const disclosureFrame = {
                _sd: ['iat', 'jti', 'fullName', 'dateOfBirth', 'nationality', 'licenseNumber', 'address', 'issuanceDate', 'sub']
            };

            mockSDJWT.sign.mockResolvedValue("test-complex-sdjwt");
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await ctx.run(task);

            // Get the actual call arguments
            const callArgs = mockSDJWT.sign.mock.calls[0][0];

            // Validate using custom atLeastContains matcher
            const expectedPayload = {
                sub: Fixtures.DIDs.peerDID1.toString(),
                fullName: "Alice Johnson",
                dateOfBirth: new Date("1990-05-15"),
                nationality: "US",
                licenseNumber: "DL123456789",
                address: "123 Main St, Anytown, USA",
                issuanceDate: new Date("2024-01-01"),
            };

            expect(callArgs.issuerDID).toEqual(Fixtures.DIDs.peerDID2);
            expect(callArgs.disclosureFrame).toEqual(disclosureFrame);
            expect(atLeastContains(callArgs.payload, expectedPayload)).toBe(true);
        });


        test("should throw error when private key is not signable", async () => {
            const instance = new SDJWT();
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            mockPrivateKey.isSignable.mockReturnValue(false);
            mockTask(FindSigningKeys, [mockSigningKey]);
            mockSDJWT.sign.mockImplementation(instance.sign)
            mockSDJWT.runTask.mockImplementation((instance as any).runTask)
            mockSDJWT.setContext(ctx);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.prismDIDDefault,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await expect(ctx.run(task)).rejects.toThrow("Key is not signable");
        });


        test("should throw error when signing key not found", async () => {
            const instance = new SDJWT();
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            mockTask(FindSigningKeys, []);
            mockSDJWT.sign.mockImplementation(instance.sign)
            mockSDJWT.runTask.mockImplementation((instance as any).runTask)
            mockSDJWT.setContext(ctx);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.prismDIDDefault,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await expect(ctx.run(task)).rejects.toThrow("key not found");
        });
    });

    describe("Error Handling", () => {
        test("should throw error for unsupported credential format", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: "UNSUPPORTED_FORMAT" as any,
                claims: claims
            });

            await expect(ctx.run(task)).rejects.toThrow("Not implemented");
        });
    });

    describe("Message Creation", () => {
        test("should create proper DIDComm message structure", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            const testCredential = "test-jwt-credential";
            mockJWT.signWithDID.mockResolvedValue(testCredential);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.JWT,
                claims: claims
            });

            const result = await ctx.run(task);

            // Verify the message structure
            const message = result.makeMessage();
            expect(message.piuri).toEqual(ProtocolType.DidcommIssueCredential);
            expect(message.from).toEqual(Fixtures.DIDs.peerDID2);
            expect(message.to).toEqual(Fixtures.DIDs.peerDID1);
            expect(message.thid).toEqual("test-thread-id");
            expect(message.attachments).toHaveLength(1);

            // Verify attachment structure
            const attachment = message.attachments[0];
            expect(attachment.format).toEqual(Domain.CredentialType.JWT);
            expect(attachment.mediaType).toEqual("application/jwt");
            expect(attachment.data).toHaveProperty("base64");

            // Verify credential is properly encoded
            if ('base64' in attachment.data) {
                const decodedCredential = Buffer.from(attachment.data.base64, "base64").toString();
                expect(decodedCredential).toEqual(testCredential);
            }
        });

        test("should preserve request thread ID in response", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            mockJWT.signWithDID.mockResolvedValue("test-jwt");

            const customThreadId = "custom-thread-12345";
            const messageWithCustomThid = new Domain.Message(
                { comment: "Test" },
                "test-id",
                ProtocolType.DidcommRequestCredential,
                Fixtures.DIDs.peerDID1,
                Fixtures.DIDs.peerDID2,
                [],
                customThreadId
            );

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: messageWithCustomThid,
                format: Domain.CredentialType.JWT,
                claims: claims
            });

            const result = await ctx.run(task);

            expect(result.thid).toEqual(customThreadId);
        });

        test("Should issue a Credential with ShortForm and fetch the keys from Pluto using LongForm and recover gracefully", async () => {
            const instance = new JWT();
            const shortFormDID = Domain.DID.fromString(
                Fixtures.DIDs.prismDIDDefault.toString().slice(0, 37)
            )

            const verificationMethods = [
                new Domain.DIDDocument.VerificationMethod(
                    "key-1",
                    shortFormDID.toString(),
                    "JsonWebKey2020",
                    { kty: mockPublicKey.kty, crv: mockPublicKey.crv, x: mockPublicKey.x, y: mockPublicKey.y }
                )
            ]
            const mockDIDDocument = new Domain.DIDDocument(
                shortFormDID,
                [
                    new Domain.DIDDocument.VerificationMethods(verificationMethods),
                    new Domain.DIDDocument.Authentication(
                        [
                            "key-1"
                        ],
                        verificationMethods
                    )
                ]
            );

            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            //Store keys with LongForm to prove the current issue
            await pluto.storeDID(Fixtures.DIDs.prismDIDDefault, [Fixtures.Keys.secp256K1.privateKey])

            let resolveDIDSpy = vi.spyOn(CastorMock, 'resolveDID')
            resolveDIDSpy.mockImplementation(async () => mockDIDDocument)
            mockPrivateKey.isSignable.mockReturnValue(true);
            mockPrivateKey.sign.mockReturnValue(Buffer.from("test-signature"));
            mockJWT.signWithDID.mockImplementation(instance.signWithDID)
            mockJWT.runTask.mockImplementation((instance as any).runTask)
            mockJWT.setContext(ctx);

            const task = new HandleRequestCredential({
                issuerDID: shortFormDID,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.JWT,
                claims: claims
            });

            const result = await ctx.run(task);
            expect(result).toBeInstanceOf(IssueCredential);
            expect(resolveDIDSpy).toHaveBeenCalledWith(shortFormDID);
        });
    });
}); 