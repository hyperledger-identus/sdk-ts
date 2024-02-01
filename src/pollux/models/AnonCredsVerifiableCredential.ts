import { Anoncreds } from "../../domain/models/Anoncreds";
import { Credential, StorableCredential } from "../../domain/models/Credential";
import { CredentialType } from "../../domain/models/VerifiableCredential";

export enum AnonCredsCredentialProperties {
  iss = "iss",
  jti = "jti",
  sub = "sub",
  exp = "exp",
  schemaId = "schema_id",
  credentialDefinitionId = "cred_def_id",
  signature = "signature",
  signatureCorrectnessProof = "signature_correctness_proof",
  values = "values",
}

export const AnonCredsRecoveryId = "anonCreds+credential";

export class AnonCredsCredential
  extends Credential
  implements StorableCredential
{
  public uuid?: string;

  public credentialType = CredentialType.AnonCreds;
  public recoveryId = AnonCredsRecoveryId;
  public properties = new Map<AnonCredsCredentialProperties, any>();

  constructor(credential: Anoncreds.Credential) {
    super();

    const {
      schema_id,
      cred_def_id,
      values,
      signature,
      signature_correctness_proof,
    } = credential;

    this.properties.set(AnonCredsCredentialProperties.schemaId, schema_id);
    this.properties.set(AnonCredsCredentialProperties.credentialDefinitionId, cred_def_id );
    this.properties.set(AnonCredsCredentialProperties.values, values);
    this.properties.set(AnonCredsCredentialProperties.signature, signature);
    this.properties.set(AnonCredsCredentialProperties.signatureCorrectnessProof, signature_correctness_proof );
  }

  get id() {
    return this.getProperty(AnonCredsCredentialProperties.jti);
  }

  get claims() {
    const values: Record<string, any> = this.getProperty(AnonCredsCredentialProperties.values);
    const claims = Object.keys(values).map(key => ({ [key]: values[key] }));

    return claims;
  }

  get credentialDefinitionId(): string {
    return this.getProperty(AnonCredsCredentialProperties.credentialDefinitionId);
  }

  get issuer() {
    return this.properties.get(AnonCredsCredentialProperties.iss);
  }

  get schemaId(): string {
    return this.getProperty(AnonCredsCredentialProperties.schemaId);
  }

  get subject() {
    return this.properties.get(AnonCredsCredentialProperties.sub);
  }

  toStorable() {
    const credentialData = JSON.stringify(Object.fromEntries(this.properties));

    return {
      recoveryId: this.recoveryId,
      credentialData: credentialData,
      id: this.id,
      issuer: this.issuer,
      subject: this.subject,
      validUntil: this.getProperty(AnonCredsCredentialProperties.exp),
      // availableClaims: claims,
    };
  }

  toJSON(): Anoncreds.Credential {
    return {
      cred_def_id: this.credentialDefinitionId,
      schema_id: this.schemaId,
      signature: this.getProperty(AnonCredsCredentialProperties.signature),
      signature_correctness_proof: this.getProperty(AnonCredsCredentialProperties.signatureCorrectnessProof),
      values: this.getProperty(AnonCredsCredentialProperties.values),
    };
  }
}
