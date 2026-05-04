#!/bin/bash

yarn clean
npx nx reset

npx nx run @hyperledger/identus-protos:build --tui false
npx nx run @hyperledger/identus-domain:build --tui false

npx nx run @hyperledger/identus-anoncreds:build --tui false
npx nx run @hyperledger/identus-didcomm:build --tui false
npx nx run @hyperledger/identus-jwe:build --tui false

npx nx run @hyperledger/identus-sdk:build --tui false
