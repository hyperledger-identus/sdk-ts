@jwt @revocation
Feature: Revoke JWT Credential
  Edge Agent should be notified when Cloud Agent revokes a credential

  Scenario Outline: Revoke a verifiable credential
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    When Cloud Agent revokes '1' credentials
    Then Edge Agent waits to receive the revocation notifications from Cloud Agent
    And Edge Agent should see the credentials were revoked by Cloud Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | secp256k1 | assert1 | ed25519    |
      | ed25519   | assert1 | ed25519    |
      | ed25519   | assert1 | secp256k1  |
