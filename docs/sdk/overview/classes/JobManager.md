[**@hyperledger/identus-sdk v7.0.0**](../../README.md)

***

[@hyperledger/identus-sdk](../../README.md) / [overview](../README.md) / JobManager

# Class: JobManager

Defined in: [src/edge-agent/connections/JobManager.ts:3](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/JobManager.ts#L3)

## Constructors

### Constructor

> **new JobManager**(): `JobManager`

#### Returns

`JobManager`

## Properties

| Property | Modifier | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="cancellables"></a> `cancellables` | `public` | [`CancellableTask`](CancellableTask.md)\<`any`\>[] | `[]` | An array with cancellable tasks, mainly used to store one or multiple didcomm connections in storage implementation at the same time. All of them can be cancelled despite they run asyncronously when the Edge agent stops | [src/edge-agent/connections/JobManager.ts:13](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/JobManager.ts#L13) |
| <a id="fetchmessages"></a> `fetchMessages?` | `public` | [`CancellableTask`](CancellableTask.md)\<`void`\> | `undefined` | Cancellable task used to listen for new messages, stopping the Agent should also stop this from running and destroy the instance of the task until agent is started again | [src/edge-agent/connections/JobManager.ts:21](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/JobManager.ts#L21) |

## Methods

### stop() {#stop}

> **stop**(): `void`

Defined in: [src/edge-agent/connections/JobManager.ts:27](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/96423ee84b124a31ce63036d9d623d1cb73a13c2/src/edge-agent/connections/JobManager.ts#L27)

Stops all jobs

#### Returns

`void`
