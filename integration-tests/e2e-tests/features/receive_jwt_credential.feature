@jwt @credential
Feature: Receive JWT Credential
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent

  Scenario Outline: Receive one verifiable credential
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    When Cloud Agent offers '1' jwt credentials
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    And Cloud Agent should see all credentials were accepted
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | secp256k1 | assert1 | ed25519    |
      | ed25519   | assert1 | secp256k1  |
      | ed25519   | assert1 | ed25519    |

  Scenario Outline: Receive multiple verifiable credentials sequentially
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    When Edge Agent accepts 3 jwt credential offer sequentially from Cloud Agent
    Then Cloud Agent should see all credentials were accepted
    And Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |

  Scenario Outline: Receive multiple verifiable credentials at once
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    When Edge Agent accepts 3 jwt credentials offer at once from Cloud Agent
    Then Cloud Agent should see all credentials were accepted
    And Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
