[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Schema

# Variable: Schema

> `const` **Schema**: `TObject`\<\{ `credentials`: `TArray`\<`TObject`\<\{ `data`: `TString`; `recovery_id`: `TString`; \}\>\>; `did_pairs`: `TArray`\<`TObject`\<\{ `alias`: `TString`; `holder`: `TString`; `recipient`: `TString`; \}\>\>; `dids`: `TArray`\<`TObject`\<\{ `alias`: `TOptional`\<`TString`\>; `did`: `TString`; \}\>\>; `keys`: `TArray`\<`TObject`\<\{ `did`: `TOptional`\<`TString`\>; `index`: `TOptional`\<`TNumber`\>; `key`: `TString`; `recovery_id`: `TString`; \}\>\>; `link_secret`: `TOptional`\<`TString`\>; `mediators`: `TArray`\<`TObject`\<\{ `holder_did`: `TString`; `mediator_did`: `TString`; `routing_did`: `TString`; \}\>\>; `messages`: `TArray`\<`TString`\>; `version`: `TOptional`\<`TLiteral`\<`"0.0.1"`\>\>; \}\>

Defined in: [src/domain/backup/v0\_0\_1.ts:39](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/domain/backup/v0_0_1.ts#L39)
