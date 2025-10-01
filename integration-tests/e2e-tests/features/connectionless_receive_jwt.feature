@jwt @connectionless @issuance
Feature: JWT Connectionless issuance
  The Edge Agent should receive a connectionless jwt credential

  Scenario Outline: Receive credential issued with <did> curve
    Given Cloud Agent is not connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    When Cloud Agent has a connectionless jwt credential offer invitation
    And Cloud Agent shares invitation to Edge Agent
    And Edge Agent connects through the invite
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent
    And Cloud Agent is not connected to Edge Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | secp256k1 | assert1 | ed25519    |
      | ed25519   | assert1 | ed25519    |
      | ed25519   | assert1 | secp256k1  |
