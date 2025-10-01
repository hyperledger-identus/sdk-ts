@jwt @proof
Feature: Provide jwt proof
  The Edge Agent should provide proof to Cloud Agent

  Scenario Outline: Edge Agent with a credential should provide proof to Cloud Agent
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' jwt credentials issued by Cloud Agent
    When Cloud Agent asks for present-proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | ed25519   | assert1 | ed25519    |
