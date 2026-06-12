[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / IBackupTask

# Interface: IBackupTask

Defined in: [packages/lib/sdk/src/pluto/backup/versions/interfaces.ts:3](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/backup/versions/interfaces.ts#L3)

## Methods

### run() {#run}

> **run**(): `Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>

Defined in: [packages/lib/sdk/src/pluto/backup/versions/interfaces.ts:4](https://github.com/hyperledger-identus/sdk-ts/blob/2f63e5682344b1a50ca2de0bd0cd67794e71c239/packages/lib/sdk/src/pluto/backup/versions/interfaces.ts#L4)

#### Returns

`Promise`\<\{ `credentials`: \{ `data`: `string`; `recovery_id`: `string`; \}[]; `did_pairs`: \{ `alias`: `string`; `holder`: `string`; `recipient`: `string`; \}[]; `dids`: \{ `alias?`: `string`; `did`: `string`; \}[]; `keys`: \{ `did?`: `string`; `index?`: `number`; `key`: `string`; `recovery_id`: `string`; \}[]; `link_secret?`: `string`; `mediators`: \{ `holder_did`: `string`; `mediator_did`: `string`; `routing_did`: `string`; \}[]; `messages`: `string`[]; `version?`: `"0.0.1"`; \}\>
