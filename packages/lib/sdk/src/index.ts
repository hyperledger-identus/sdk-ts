/** 
 * <!-- title: Overview -->
 * <!-- sidebar_label: Overview -->
 * <!-- sidebar_position: 1 -->
 * 
 * @module overview
 */
// Core Agent exports
import "./globals";

export { PluginManager } from "./plugins/PluginManager";

// JWT utilities
export { JWT } from "./pollux/utils/jwt/JWT";
export { SDJWT } from "./pollux/utils/jwt/SDJWT";

export * from "./apollo";
export * from "./castor";
export * from "./mercury";
export * from './edge-agent'
export * from "./pluto";
export type { CreateOptions } from "./pluto";

// Domain and utilities
export * as Domain from "@hyperledger/identus-domain";

// Utils — explicit value-only namespace to avoid rollup-plugin-dts emitting
// invalid `declare const: typeof` for type aliases/interfaces.
import {
  isNil, notNil, isObject, isString, isArray, notEmptyString, isEmpty,
  asArray, asJsonObj, expect,
  ConsoleLogger,
  Task
} from "./utils";

export const Utils = {
  isNil, notNil, isObject, isString, isArray, notEmptyString, isEmpty,
  asArray, asJsonObj, expect,
  ConsoleLogger,
  Task
} as const;

// Utils type-only re-exports (cannot be in a runtime namespace)
export type { Arrayable, Ctor, Nil, JsonObj, Normalize, Logger, LogLevel } from "./utils";

// Plugin system
export { Plugin } from "./plugins/Plugin";
export { Plugins } from "./plugins/types";
// Connections

export * from './peer-did/PeerDID';

// Keys
export * from "./apollo/utils/Secp256k1PrivateKey";
export * from "./apollo/utils/Secp256k1PublicKey";
export * from "./apollo/utils/Secp256k1KeyPair";
export * from "./apollo/utils/Ed25519PrivateKey";
export * from "./apollo/utils/Ed25519PublicKey";
export * from "./apollo/utils/Ed25519KeyPair";
export * from "./apollo/utils/X25519PrivateKey";
export * from "./apollo/utils/X25519PublicKey";
export * from "./apollo/utils/X25519KeyPair";

// Credentials
export { JWTCredential, JWT_VC_PROPS, JWT_VP_PROPS } from "./pollux/models/JWTVerifiableCredential";
export type { JWTCredentialPayload, JWTPresentationPayload } from "./pollux/models/JWTVerifiableCredential";
export { SDJWTCredential, SDJWT_VP_PROPS } from "./pollux/models/SDJWTVerifiableCredential";

