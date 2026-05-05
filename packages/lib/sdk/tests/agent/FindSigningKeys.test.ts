import { vi, describe, expect, test, beforeEach, afterEach } from 'vitest';
import * as Domain from '@hyperledger/identus-domain';
import { Task } from '../../src/utils';
import * as Fixtures from "../fixtures";
import { FindSigningKeys, FindIssuerSigningKeys, FindAuthenticationSigningKeys } from '../../src/edge-agent/didFunctions/FindDIDSigningKeys';

describe("FindSigningKeys", () => {
    let ctx: Task.Context<{
        Castor: Domain.Castor;
        Pluto: Domain.Pluto;
    }>;
    let castor: Domain.Castor;
    let pluto: Domain.Pluto;

    const did = Fixtures.DIDs.prismDIDDefault;
    const privateKey = Fixtures.Keys.ed25519.privateKey;
    const publicKey = Fixtures.Keys.ed25519.publicKey;

    beforeEach(() => {
        castor = { resolveDID: vi.fn() } as any;
        pluto = { getDIDPrivateKeysByDID: vi.fn(), getAllPrismDIDs: vi.fn() } as any;
        ctx = new Task.Context({ Castor: castor, Pluto: pluto });
        vi.spyOn(privateKey, "publicKey").mockReturnValue(publicKey);
        vi.spyOn(pluto, "getDIDPrivateKeysByDID").mockResolvedValue([privateKey]);
        vi.spyOn(pluto, "getAllPrismDIDs").mockResolvedValue([]);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test("FindIssuerSigningKeys - searches assertionMethod in DID document", async () => {
        const spyResolveDID = vi.spyOn(castor, "resolveDID").mockResolvedValue({
            assertionMethod: [],
            authentication: [],
        } as any);

        await ctx.run(new FindIssuerSigningKeys({ did }));

        expect(spyResolveDID).toHaveBeenCalledWith(did);
    });

    test("FindAuthenticationSigningKeys - searches authentication in DID document", async () => {
        const spyResolveDID = vi.spyOn(castor, "resolveDID").mockResolvedValue({
            assertionMethod: [],
            authentication: [],
        } as any);

        await ctx.run(new FindAuthenticationSigningKeys({ did }));

        expect(spyResolveDID).toHaveBeenCalledWith(did);
    });

    test("FindSigningKeys - supports KEY_AGREEMENT_KEY purpose", async () => {
        vi.spyOn(castor, "resolveDID").mockResolvedValue({
            keyAgreement: [],
            assertionMethod: [],
            authentication: [],
        } as any);

        const result = await ctx.run(new FindSigningKeys({ did, purpose: "KEY_AGREEMENT_KEY" }));
        expect(result).toEqual([]);
    });

    test("FindSigningKeys - supports CAPABILITY_INVOCATION_KEY purpose", async () => {
        vi.spyOn(castor, "resolveDID").mockResolvedValue({
            capabilityInvocation: [],
            assertionMethod: [],
            authentication: [],
        } as any);

        const result = await ctx.run(new FindSigningKeys({ did, purpose: "CAPABILITY_INVOCATION_KEY" }));
        expect(result).toEqual([]);
    });

    test("FindSigningKeys - supports CAPABILITY_DELEGATION_KEY purpose", async () => {
        vi.spyOn(castor, "resolveDID").mockResolvedValue({
            capabilityDelegation: [],
            assertionMethod: [],
            authentication: [],
        } as any);

        const result = await ctx.run(new FindSigningKeys({ did, purpose: "CAPABILITY_DELEGATION_KEY" }));
        expect(result).toEqual([]);
    });
});