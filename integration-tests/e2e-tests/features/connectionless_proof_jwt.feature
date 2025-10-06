@jwt @connectionless @proof
Feature: JWT Connectionless proof
  The Edge Agent should provide a connectionless proof

  Scenario Outline: Provide connectionless proof using <did> curve
    Given Cloud Agent is not connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' connectionless jwt credentials issued by Cloud Agent
    When Cloud Agent has a connectionless jwt verification invite
    And Cloud Agent shares invitation to Edge Agent
    And Edge Agent connects through the invite
    When Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
    And Cloud Agent is not connected to Edge Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | secp256k1 | assert1 | ed25519    |
      | ed25519   | assert1 | ed25519    |
      | ed25519   | assert1 | secp256k1  |
