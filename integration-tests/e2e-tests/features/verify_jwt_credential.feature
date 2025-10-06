@jwt @sdkverification
Feature: Verify JWT presentation
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent and then send a presentation to another edge agent who will verify it

  Scenario Outline: SDKs JWT Verification
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |

  Scenario Outline: SDKs JWT Revoked Verification
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    When Cloud Agent revokes '1' credentials
    Then Verifier Edge Agent will request Edge Agent to verify the JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified false

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
