@sdjwt @sdkverification
Feature: Verify SD+JWT presentation
  The Edge Agent should be able to receive a verifiable credential from Cloud Agent and then send a presentation to another edge agent who will verify it

  Scenario Outline: SDK provides right proof
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' sd+jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the SD+JWT credential
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified

    Examples:
      | did     | kid     | did_schema |
      | ed25519 | assert1 | ed25519    |

  Scenario Outline: Wrong SD+JWT presentation
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has '1' sd+jwt credentials issued by Cloud Agent
    Then Verifier Edge Agent will request Edge Agent to verify the SD+JWT credential with non-existing claims
    When Edge Agent sends the verification proof
    Then Verifier Edge Agent should see the verification proof is verified false

    Examples:
      | did     | kid     | did_schema |
      | ed25519 | assert1 | ed25519    |
