@anoncred @proof
Feature: Provide anoncred proof
  The Edge Agent should provide anoncred proof to Cloud Agent

  Scenario Outline: Edge Agent with a credential should provide proof to Cloud Agent
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses definition='<definition>' issued with did='<did_definition>'
    And Edge Agent has '1' anonymous credentials issued by Cloud Agent
    When Cloud Agent asks for presentation of AnonCred proof
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified

    Examples:
      | did       | kid     | definition | did_definition |
      | secp256k1 | assert1 | credDefUrl | secp256k1      |
      | ed25519   | assert1 | credDefUrl | ed25519        |

  Scenario Outline: Respond to a present request with a wrong credential
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses definition='<definition>' issued with did='<did_definition>'
    And Edge Agent has '1' anonymous credentials issued by Cloud Agent
    When Cloud Agent asks for presentation of AnonCred proof with unexpected attributes
    Then Edge Agent should receive an exception when trying to use a wrong anoncred credential

    Examples:
      | did       | kid     | definition | did_definition |
      | secp256k1 | assert1 | credDefUrl | secp256k1      |
      | ed25519   | assert1 | credDefUrl | ed25519        |

  @disabled
  Scenario: Respond to a present request with a wrong attribute
    Given Cloud Agent is connected to Edge Agent
    And Edge Agent has '1' anonymous credentials issued by Cloud Agent
    When Cloud Agent asks for presentation of AnonCred proof with unexpected values
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is not verified
