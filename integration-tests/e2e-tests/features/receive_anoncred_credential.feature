@anoncred @credential
Feature: Receive Anoncred Credential
  The Edge Agent should be able to receive an anonymous credential from Cloud Agent

  Scenario: Receive one anonymous credential
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses definition='<definition>' issued with did='<did_definition>'
    When Cloud Agent offers '1' anonymous credential
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    And Cloud Agent should see all credentials were accepted
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent

    Examples:
      | did       | kid     | definition | did_definition |
      | secp256k1 | assert1 | credDefUrl | secp256k1      |
      | secp256k1 | assert1 | credDefUrl | ed25519        |
      | ed25519   | assert1 | credDefUrl | ed25519        |
      | ed25519   | assert1 | credDefUrl | secp256k1      |
