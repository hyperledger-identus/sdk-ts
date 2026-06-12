[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / PrismDIDKeyUsage

# Variable: PrismDIDKeyUsage

> `const` **PrismDIDKeyUsage**: \{ `AUTHENTICATION_KEY`: `4`; `CAPABILITY_DELEGATION_KEY`: `7`; `CAPABILITY_INVOCATION_KEY`: `6`; `ISSUING_KEY`: `2`; `KEY_AGREEMENT_KEY`: `3`; `MASTER_KEY`: `1`; `REVOCATION_KEY`: `5`; `UNKNOWN_KEY`: `0`; \}

Defined in: packages/shared/domain/build/index.d.ts:1849

Mirrors `io.iohk.atala.prism.protos.KeyUsage` from the auto-generated
protobuf code. Defined locally to keep the proto namespace (which contains
ES `#private` fields) out of the DTS rollup graph — rollup-plugin-dts
cannot handle `#private` inside namespace class declarations.

The `satisfies` clause below guarantees at compile time that every member
matches the proto definition — if the proto enum changes, tsc will error.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="property-authentication_key"></a> `AUTHENTICATION_KEY` | `4` | packages/shared/domain/build/index.d.ts:1854 |
| <a id="property-capability_delegation_key"></a> `CAPABILITY_DELEGATION_KEY` | `7` | packages/shared/domain/build/index.d.ts:1857 |
| <a id="property-capability_invocation_key"></a> `CAPABILITY_INVOCATION_KEY` | `6` | packages/shared/domain/build/index.d.ts:1856 |
| <a id="property-issuing_key"></a> `ISSUING_KEY` | `2` | packages/shared/domain/build/index.d.ts:1852 |
| <a id="property-key_agreement_key"></a> `KEY_AGREEMENT_KEY` | `3` | packages/shared/domain/build/index.d.ts:1853 |
| <a id="property-master_key"></a> `MASTER_KEY` | `1` | packages/shared/domain/build/index.d.ts:1851 |
| <a id="property-revocation_key"></a> `REVOCATION_KEY` | `5` | packages/shared/domain/build/index.d.ts:1855 |
| <a id="property-unknown_key"></a> `UNKNOWN_KEY` | `0` | packages/shared/domain/build/index.d.ts:1850 |
