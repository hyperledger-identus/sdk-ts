# 8.0.0 (2026-06-12)

### 🚀 Features

- **pollux:** support both 'jwt' and 'prism/jwt' credential formats (… ([#536](https://github.com/hyperledger-identus/sdk-ts/pull/536))
- implementing deferred seeds ([#544](https://github.com/hyperledger-identus/sdk-ts/pull/544))
- implementing identus default store ([#518](https://github.com/hyperledger-identus/sdk-ts/pull/518))

### 🩹 Fixes

- **domain:** preserve path and query in DIDUrl serialization ([#635](https://github.com/hyperledger-identus/sdk-ts/pull/635))
- **pollux:** wire up SD-JWT Key Binding JWT for presentation proofs ([#624](https://github.com/hyperledger-identus/sdk-ts/pull/624))
- **pollux:** add exp/nbf validation and fix error logging in SDJWT.verify ([#556](https://github.com/hyperledger-identus/sdk-ts/pull/556))
- **pollux:** fix JWT/SDJWT iat/exp claim units to seconds (RFC 7519) ([#617](https://github.com/hyperledger-identus/sdk-ts/pull/617))
- **mercury:** correct JWK encoding in DIDComm bridge ([#580](https://github.com/hyperledger-identus/sdk-ts/pull/580))
- **sdjwt:** remove console.log from verify error handling ([#581](https://github.com/hyperledger-identus/sdk-ts/pull/581))
- **pollux:** check nbf claim in JWT.verify ([#552](https://github.com/hyperledger-identus/sdk-ts/pull/552))
- **castor:** verify long-form PRISM DID state hash ([#582](https://github.com/hyperledger-identus/sdk-ts/pull/582))
- improve HandleOfferCredential error ([#560](https://github.com/hyperledger-identus/sdk-ts/pull/560))
- remove wrong lowercase in key alg ([#603](https://github.com/hyperledger-identus/sdk-ts/pull/603))
- **pollux:** check exp claim in JWT.verify ([#550](https://github.com/hyperledger-identus/sdk-ts/pull/550))
- **test:** correct @stablelib/uuid import in invitation test ([#583](https://github.com/hyperledger-identus/sdk-ts/pull/583), [#591](https://github.com/hyperledger-identus/sdk-ts/pull/591))
- default seed + sdjwt restoration ([#577](https://github.com/hyperledger-identus/sdk-ts/pull/577))
- explicitly request authentication or assertion key or will not g… ([#593](https://github.com/hyperledger-identus/sdk-ts/pull/593))
- **castor:** improve error message for unsupported PeerDID curve ([#533](https://github.com/hyperledger-identus/sdk-ts/pull/533))
- making mercury did agnostic and support prism didcomm messages ([#572](https://github.com/hyperledger-identus/sdk-ts/pull/572))
- add new did search method in pluto ([#569](https://github.com/hyperledger-identus/sdk-ts/pull/569))
- store and retrieve the derivationPath on keys derived from a seed ([#570](https://github.com/hyperledger-identus/sdk-ts/pull/570))
- export the default did methods ([#571](https://github.com/hyperledger-identus/sdk-ts/pull/571))
- setup right project priority to fix race condition ([#568](https://github.com/hyperledger-identus/sdk-ts/pull/568))
- **pollux:** improve JWT VC/VP payload validation ([#539](https://github.com/hyperledger-identus/sdk-ts/pull/539))
- **pollux:** replace generic Error with domain-specific PolluxError/CastorError in JWT utils ([#542](https://github.com/hyperledger-identus/sdk-ts/pull/542))
- refactor Apollo and Pluto to keep track of the keyProperties whe… ([#565](https://github.com/hyperledger-identus/sdk-ts/pull/565))
- improve didmethod abstraction ([#564](https://github.com/hyperledger-identus/sdk-ts/pull/564))
- refactor castor with didMethods ([#559](https://github.com/hyperledger-identus/sdk-ts/pull/559))
- yarn lock update dependency ([#527](https://github.com/hyperledger-identus/sdk-ts/pull/527))
- package lock update ([#526](https://github.com/hyperledger-identus/sdk-ts/pull/526))
- expo compatibility fix, using initSync, remove sed hardcoding ([#524](https://github.com/hyperledger-identus/sdk-ts/pull/524))
- test type safety ([#519](https://github.com/hyperledger-identus/sdk-ts/pull/519))
- adding shims for seammless integration of wasm dependencies with cjs and esm ([#517](https://github.com/hyperledger-identus/sdk-ts/pull/517))
- update nx release pipeline, build and readme ([#512](https://github.com/hyperledger-identus/sdk-ts/pull/512))
- ⚠️  v8 refactor + deprecations ([#511](https://github.com/hyperledger-identus/sdk-ts/pull/511))

### ⚠️  Breaking Changes

- v8 refactor + deprecations  ([#511](https://github.com/hyperledger-identus/sdk-ts/pull/511))

### ❤️ Thank You

- Aarish mansur
- Abhigyan Singh @abhigyan1102
- Allain Magyar
- Anshika chaubey @A-Chronicle
- Dev dev @Dev10-sys
- Fabio Pinheiro @FabioPinheiro
- Javier Ribó
- Seydi Charyyev @TheSeydiCharyyev
- Yummy-Yums @Yummy-Yums
- Yurii Shynbuiev @yshyn-iohk
- Zaid @iammdzaidalam