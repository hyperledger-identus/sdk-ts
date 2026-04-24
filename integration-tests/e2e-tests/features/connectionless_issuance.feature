@jwt @connectionless @issuance
Feature: JWT Connectionless issuance
  The Edge Agent should receive a connectionless jwt credential

  Scenario: Successful issuance without DID connection
    Given Cloud Agent is not connected to Edge Agent
    And Cloud Agent uses did='secp256k1' and kid='assert1' for issuance
    And Cloud Agent uses jwt schema issued with did='secp256k1'
    When Cloud Agent has a connectionless jwt credential offer invitation
    And Cloud Agent shares invitation to Edge Agent
    And Edge Agent connects through the invite
    Then Edge Agent should receive the credentials offer from Cloud Agent
    When Edge Agent accepts the credentials offer from Cloud Agent
    Then Edge Agent wait to receive issued credentials from Cloud Agent
    And Edge Agent process issued credentials from Cloud Agent
    And no DID connection should be created for Edge Agent
    And the credential should be stored in Edge Agent
    And Cloud Agent is not connected to Edge Agent

  Scenario: Tampered offer should fail
    Given an invalid connectionless offer invitation for Edge Agent
    Then invalid issuance error should be thrown for Edge Agent

  Scenario: Corrupt attachment should fail
    Given a corrupt OOB invitation for Edge Agent
    Then corrupt attachment error should be thrown for Edge Agent
