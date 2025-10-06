# Wallet SDK - Typescript E2E

## How to run

This guide shows you how to run the end-to-end tests

### Setting up the environment variables

- Copy `.env.example` to `.env`
- Fill the required properties

| Property                           | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| MEDIATOR_OOB_URL                   | URL that returns the OOB url                                 |
| AGENT_URL                          | URL for Cloud Agent - should end with a forward slash ("/")  |
| APIKEY                             | (Optional) Apikey authentication                             |
| SECP256K1_PUBLISHED_DID            | (Optional) Existing DID using secp256k1                      |
| SECP256K1_JWT_SCHEMA_GUID          | (Optional) Existing jwt schema guid using secp256k1          |
| SECP256K1_ANONCRED_DEFINITION_GUID | (Optional) Existing anoncred definition guid using secp256k1 |
| ED25519_PUBLISHED_DID              | (Optional) Existing DID using Ed25519                        |
| ED25519_SCHEMA_GUID                | (Optional) Existing jwt schema guid using Ed25519            |
| ED25519_ANONCRED_DEFINITION_GUID   | (Optional) Existing anoncred definition guid using Ed25519   |

### Compile the SDK

To test the changes you'll need to build the SDK. Refer to [README](/../../README.md#building-from-source) for
further instructions.

### Installing dependencies

```bash
npm install
```

### Running the tests

To run the full end-to-end regression test suite

```bash
npm run test:sdk
```

To run a specific tagged scenario

```bash
npm run test:sdk --tags "@mytag and @anothertag"
```

After the execution is done, it will generate the report inside the `target` folder.