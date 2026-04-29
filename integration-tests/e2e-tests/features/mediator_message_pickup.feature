@mediator_pickup
Feature: Mediator message pickup after wallet restore
  When a wallet that was connected to a Mediator is destroyed and later recovered
  from the same mnemonics, it should retrieve any messages that were queued
  at the Mediator while it was disconnected

  Scenario Outline: Restored wallet picks up messages queued at Mediator while disconnected
    Given Cloud Agent is connected to Edge Agent
    And Cloud Agent uses did='<did>' and kid='<kid>' for issuance
    And Cloud Agent uses jwt schema issued with did='<did_schema>'
    And Edge Agent has created a backup
    When Edge Agent is dismissed
    And Cloud Agent offers '1' jwt credentials
    And a new Restored Agent is restored from Edge Agent
    Then Restored Agent should receive the credentials offer from Cloud Agent

    Examples:
      | did       | kid     | did_schema |
      | secp256k1 | assert1 | secp256k1  |
      | ed25519   | assert1 | ed25519    |
