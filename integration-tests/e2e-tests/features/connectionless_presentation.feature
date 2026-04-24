@jwt @connectionless @proof
Feature: JWT Connectionless presentation
  The Edge Agent should provide a connectionless proof

  Scenario: Successful connectionless presentation without DID connection
    Given Cloud Agent is not connected to Edge Agent
    And Cloud Agent uses did='secp256k1' and kid='assert1' for issuance
    When Cloud Agent has a connectionless jwt verification invite
    And Cloud Agent shares invitation to Edge Agent
    And Edge Agent connects through the invite
    And Edge Agent sends the present-proof
    Then Cloud Agent should see the present-proof is verified
    And no DID connection should be created for Edge Agent

  Scenario: Tampered presentation request should fail
    Given an invalid connectionless presentation request for Edge Agent
    When Edge Agent connects through the invite
    Then invalid verification error should be thrown for Edge Agent

  Scenario: Missing credentials should fail
    Given a presentation request for unsupported credential type for Edge Agent
    When Edge Agent connects through the invite
    Then an error should be thrown for Edge Agent
