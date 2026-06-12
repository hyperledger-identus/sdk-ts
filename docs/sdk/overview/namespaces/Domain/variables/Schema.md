[**@hyperledger/identus-sdk v7.0.0**](../../../../README.md)

***

[@hyperledger/identus-sdk](../../../../README.md) / [overview](../../../README.md) / [Domain](../README.md) / Schema

# Variable: Schema

> `const` **Schema**: `TB.TObject`\<\{ `credentials`: `TB.TArray`\<`TB.TObject`\<\{ `data`: `TB.TString`; `recovery_id`: `TB.TString`; \}\>\>; `did_pairs`: `TB.TArray`\<`TB.TObject`\<\{ `alias`: `TB.TString`; `holder`: `TB.TString`; `recipient`: `TB.TString`; \}\>\>; `dids`: `TB.TArray`\<`TB.TObject`\<\{ `alias`: `TB.TOptional`\<`TB.TString`\>; `did`: `TB.TString`; \}\>\>; `keys`: `TB.TArray`\<`TB.TObject`\<\{ `did`: `TB.TOptional`\<`TB.TString`\>; `index`: `TB.TOptional`\<`TB.TNumber`\>; `key`: `TB.TString`; `recovery_id`: `TB.TString`; \}\>\>; `link_secret`: `TB.TOptional`\<`TB.TString`\>; `mediators`: `TB.TArray`\<`TB.TObject`\<\{ `holder_did`: `TB.TString`; `mediator_did`: `TB.TString`; `routing_did`: `TB.TString`; \}\>\>; `messages`: `TB.TArray`\<`TB.TString`\>; `version`: `TB.TOptional`\<`TB.TLiteral`\<`"0.0.1"`\>\>; \}\>

Defined in: packages/shared/domain/build/index.d.ts:36
