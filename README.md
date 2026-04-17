<p align="center">
    <a href="https://www.lfdecentralizedtrust.org/projects/identus">
        <img src="https://raw.githubusercontent.com/hyperledger-identus/docs/refs/heads/main/static/img/graphics/identus-hero.svg" alt="identus-logo" height="99px" />
    </a>
</p>

[![Checks](https://img.shields.io/github/actions/workflow/status/hyperledger-identus/sdk-ts/ci.yml?branch=main&label=checks)](https://github.com/hyperledger-identus/sdk-ts/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/hyperledger-identus/sdk-ts/badge.svg?branch=main)](https://coveralls.io/github/hyperledger-identus/sdk-ts?branch=main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=hyperledger-identus_sdk-ts&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=hyperledger-identus_sdk-ts)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11733/badge)](https://www.bestpractices.dev/projects/11733)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/hyperledger-identus/sdk-ts/badge)](https://scorecard.dev/viewer/?uri=github.com/hyperledger-identus/sdk-ts)

[![GitHub release](https://img.shields.io/github/release/hyperledger-identus/sdk-ts.svg)](https://github.com/hyperledger-identus/sdk-ts/releases)
[![NPM Downloads](https://img.shields.io/npm/d18m/%40hyperledger%2Fidentus-sdk)](https://www.npmjs.com/package/@hyperledger/identus-sdk)
[![Discord](https://img.shields.io/discord/905194001349627914?label=discord)](https://discord.com/channels/905194001349627914/1230596020790886490)

# Identus TypeScript SDK

Identus is a self-sovereign identity (SSI) platform and service suite for
verifiable data and digital identity. Built on Cardano, as a distributed ledger,
it offers core infrastructure for issuing DIDs (Decentralized identifiers) and
verifiable credentials, alongside tools and frameworks to help expand your ecosystem.
The complete platform is separated into multiple repositories:

* [Cloud Agent](https://github.com/hyperledger-identus/cloud-agent) - Repo that contains the Cloud Agent that provides self-sovereign identity services to build products and solutions.
* [Mediator](https://github.com/hyperledger-identus/mediator) - Repo for the DIDComm V2 Mediator.
* [SDK TS](https://github.com/hyperledger-identus/sdk-ts) - Repo for the Typescript SDK.

We also have SDKs for other platforms:

* [SDK Swift](https://github.com/hyperledger-identus/sdk-swift) - Repo for the Swift SDK.
* [SDK KMP](https://github.com/hyperledger-identus/sdk-kmp) - Repo for the Kotlin Multi-Platform SDK.

## SDK Overview

* Apollo: Provides a suite of necessary cryptographic operations.
* Castor: Provides a suite of operations to create, manage and resolve decentralized identifiers.
* Mercury: Provides a suite of operations for handling DIDComm V2 messages.
* Pluto: Provides an interface for storage operations in a portable, storage-agnostic manner.
* Agent: A component using all other building blocks, provides basic edge agent capabilities, including implementing DIDComm V2 protocols.

## Getting started

We highly recommend you check out the [docs](https://hyperledger-identus.github.io/docs/sdk-ts/docs/sdk/) :world_map:

### Requirements

You will need the following:

* Bash
* Rust ([cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)) and [wasm-pack](https://drager.github.io/wasm-pack/) installed.
* Node JS Version (20/LTS Recommended)
* Protobuf compiler (<https://protobuf.dev/installation/>)

### Install

**NOTE**: The package was renamed from `@hyperledger/identus-edge-agent-sdk` to `@hyperledger/identus-sdk`. Modify the scripts if you ready to use the new package accordingly.

```bash
npm i @hyperledger/identus-sdk
```

or

```bash
yarn add @hyperledger/identus-sdk
```

### Building from source

Please make sure that all the requirements are met, then run the following commands:

```bash
sh externals/run.sh -x update # To fetch and initialize anoncreds and didcomm submodules
yarn build
```

### Testing

```bash
npx nx run @hyperledger/identus-sdk:test
```

### Testing everything
```bash
yarn test
```

### Testing e2e
Requires you to have `Cloud Agent` and `Mediator` running.

To run the tests from root level, simply:

```bash
./integration-tests/e2e-tests/run.sh
```

[Read more](./integration-tests/e2e-tests/README.md)

If you have any issues while building you can try building from docker (this runs exactly the same build):

```bash
docker build -t identus-sdk-ts:latest "." 
docker run  -v $(pwd)/build:/app/build identus-sdk-ts:latest
```
