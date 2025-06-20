import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import { mockPluto } from "../fixtures/inmemory/factory";
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

describe("HandleRequestCredential", () => {
    let ctx: Task.Context;
    let pluto: Domain.Pluto;
    let mockJWT: any;
    let mockSDJWT: any;
    let mockMessage: Domain.Message;
    let mockSigningKey: any;
    let mockPrivateKey: any;

    beforeEach(async () => {
        // Mock JWT service
        mockJWT = {
            signWithDID: vi.fn()
        };

        // Mock SDJWT service
        mockSDJWT = {
            sign: vi.fn()
        };

        // Mock private key
        mockPrivateKey = {
            isSignable: vi.fn().mockReturnValue(true)
        };

        // Mock signing key
        mockSigningKey = {
            privateKey: mockPrivateKey
        };

        pluto = mockPluto();
        const plugins = new PluginManager();
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
            Pluto: pluto,
            Plugins: plugins,
            JWT: mockJWT,
            SDJWT: mockSDJWT
        });
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
            expect(mockJWT.signWithDID).toHaveBeenCalledWith(
                Fixtures.DIDs.peerDID2,
                expect.objectContaining({
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
                })
            );
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

            expect(mockJWT.signWithDID).toHaveBeenCalledWith(
                Fixtures.DIDs.peerDID2,
                expect.objectContaining({
                    vc: {
                        credentialSubject: {
                            stringField: "test",
                            numberField: 42,
                            booleanField: true,
                            dateField: new Date("2023-01-01"),
                            unknownField: "value"
                        }
                    }
                })
            );
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

            // Verify SDJWT service was called with empty disclosure frame (all fields visible)
            expect(mockSDJWT.sign).toHaveBeenCalledWith({
                issuerDID: Fixtures.DIDs.peerDID2,
                privateKey: mockPrivateKey,
                payload: expect.objectContaining({
                    iss: Fixtures.DIDs.peerDID2.toString(),
                    sub: Fixtures.DIDs.peerDID1.toString(),
                    vc: {
                        credentialSubject: {
                            name: "John Doe",
                            age: 25
                        }
                    },
                    vct: Fixtures.DIDs.peerDID2.toString()
                }),
                disclosureFrame: {} // Empty frame means no selective disclosure, all fields are always visible
            });
        });

        test("should create SDJWT credential with selective disclosure for privacy protection", async () => {
            const claims = [
                { name: "firstName", value: "John", type: "string" },
                { name: "lastName", value: "Doe", type: "string" },
                { name: "email", value: "john.doe@example.com", type: "string" },
                { name: "age", value: "30", type: "number" }
            ];

            // Define a meaningful disclosure frame that enables privacy-preserving presentations
            // In this scenario, a holder can choose whether to reveal sensitive information like email and age
            // while always showing basic identification like firstName and lastName
            const disclosureFrame = {
                _sd: ["vc"], // The entire vc object can be selectively disclosed
                vc: {
                    _sd: ["credentialSubject"], // credentialSubject can be selectively disclosed
                    credentialSubject: {
                        _sd: ["email", "age"] // Only email and age are selectively disclosable, firstName and lastName are always visible
                    }
                }
            } as any; // Using 'as any' to work around strict typing for test purposes

            mockSDJWT.sign.mockResolvedValue("test-sdjwt-with-disclosure");
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims,
                disclosureFrame: disclosureFrame
            });

            await ctx.run(task);

            expect(mockSDJWT.sign).toHaveBeenCalledWith({
                issuerDID: Fixtures.DIDs.peerDID2,
                privateKey: mockPrivateKey,
                payload: expect.objectContaining({
                    vc: {
                        credentialSubject: {
                            firstName: "John",
                            lastName: "Doe",
                            email: "john.doe@example.com",
                            age: 30
                        }
                    }
                }),
                disclosureFrame: disclosureFrame
            });
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
                _sd: ["vc", "iat", "exp", "nbf"], // Core JWT fields can be selectively disclosed
                vc: {
                    _sd: ["credentialSubject"], // The entire credential subject can be hidden if needed
                    credentialSubject: {
                        // Fine-grained control: sensitive info is selectively disclosable
                        _sd: ["dateOfBirth", "licenseNumber", "address", "nationality"]
                        // fullName and issuanceDate remain always visible for basic identification
                    }
                }
            } as any;

            mockSDJWT.sign.mockResolvedValue("test-complex-sdjwt");
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims,
                disclosureFrame: disclosureFrame
            });

            await ctx.run(task);

            expect(mockSDJWT.sign).toHaveBeenCalledWith({
                issuerDID: Fixtures.DIDs.peerDID2,
                privateKey: mockPrivateKey,
                payload: expect.objectContaining({
                    vc: {
                        credentialSubject: {
                            fullName: "Alice Johnson",
                            dateOfBirth: new Date("1990-05-15"),
                            nationality: "US",
                            licenseNumber: "DL123456789",
                            address: "123 Main St, Anytown, USA",
                            issuanceDate: new Date("2024-01-01")
                        }
                    }
                }),
                disclosureFrame: disclosureFrame
            });
        });

        test("should throw error when signing key not found", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            mockTask(FindSigningKeys, []);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await expect(ctx.run(task)).rejects.toThrow("key not found");
        });

        test("should throw error when private key is not signable", async () => {
            const claims = [
                { name: "name", value: "John Doe", type: "string" }
            ];

            mockPrivateKey.isSignable.mockReturnValue(false);
            mockTask(FindSigningKeys, [mockSigningKey]);

            const task = new HandleRequestCredential({
                issuerDID: Fixtures.DIDs.peerDID2,
                holderDID: Fixtures.DIDs.peerDID1,
                message: mockMessage,
                format: Domain.CredentialType.SDJWT,
                claims: claims
            });

            await expect(ctx.run(task)).rejects.toThrow("Key is not signable");
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
    });
}); 