[**@hyperledger/identus-sdk v7.0.0**](../../../README.md)

***

[@hyperledger/identus-sdk](../../../README.md) / [overview](../../README.md) / Pluto

# Pluto

Pluto implementation

Structure:
- Pluto class is an orchestration layer
- Repositories handle mapping between Domain and Storable Models
- Models suggest db structure
- Store abstracts db implementation

Pluto:
- always handles Domain classes
- manage relationships
- handle logic and concepts
- throw known Errors
- return null
- naming convention
  - (get/store) (Domain name Pluralized) ie getCredentials

Models:
- naming convention
  - alias for optional names
  - name for required identifiers
  - dataJson for JSON.stringified objects

Store:
- simplified interface
- crud interactions
- only use Models

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Store](interfaces/Store.md) | Store interface for Pluto persistence layer |
