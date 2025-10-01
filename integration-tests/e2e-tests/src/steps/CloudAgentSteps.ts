import { Given, Then, When } from "@cucumber/cucumber"
import { Actor, notes } from "@serenity-js/core"
import { CloudAgentWorkflow } from "../workflow/CloudAgentWorkflow"
import { EdgeAgentWorkflow } from "../workflow/EdgeAgentWorkflow"
import { Utils } from "../Utils"
import { credential } from "@hyperledger/identus-sdk/build/domain"
import { Setup } from "../configuration/Setup"
import { assert } from "console"

Given("{actor} has a connection invitation with '{}', '{}' and '{}' parameters", async function (
  cloudAgent: Actor,
  rawLabel: string,
  rawGoalCode: string,
  rawGoal: string
) {
  const label = rawLabel == "null" ? undefined : rawLabel
  const goalCode = rawGoalCode == "null" ? undefined : rawGoalCode
  const goal = rawGoal == "null" ? undefined : rawGoal
  await CloudAgentWorkflow.createConnection(cloudAgent, label, goalCode, goal)
})

Given("{actor} is connected to {actor}", async function (cloudAgent: Actor, edgeAgent: Actor) {
  await CloudAgentWorkflow.createConnection(cloudAgent)
  await CloudAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
  await EdgeAgentWorkflow.connect(edgeAgent)
  await CloudAgentWorkflow.waitForConnectionState(cloudAgent, "ConnectionResponseSent")
})

Given("{actor} is not connected to {actor}", async function (cloudAgent: Actor, edgeAgent: Actor) {
  await CloudAgentWorkflow.hasNoConnection(cloudAgent)
})

Given("{actor} shares invitation to {actor}", async function (cloudAgent: Actor, edgeAgent: Actor) {
  await CloudAgentWorkflow.shareInvitation(cloudAgent, edgeAgent)
})

Given("{actor} has a connectionless jwt credential offer invitation", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.createJwtConnectionlessCredentialOfferInvitation(cloudAgent)
  await cloudAgent.attemptsTo(notes().set("recordIdList", ["connectionless"]))
})

Given("{actor} has a connectionless jwt verification invite", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.createJwtConnectionlessVerificationInvite(cloudAgent)
  await cloudAgent.attemptsTo(notes().set("recordIdList", ["connectionless"]))
})

Given("{actor} uses did='{}' and kid='{}' for issuance", async function (cloudAgent: Actor, did: string, kid: string) {
  assert(Setup[did])
  await cloudAgent.attemptsTo(notes().set('kid', kid))
  await cloudAgent.attemptsTo(notes().set('did', Setup[did].did))
})

Given("{actor} uses jwt schema issued with did='{}'", async function (cloudAgent: Actor, did: string) {
  assert(Setup[did])
  await cloudAgent.attemptsTo(notes().set('schema_guid', Setup[did].jwtSchema))
  await cloudAgent.attemptsTo(notes().set('schema_url', Setup[did].jwtSchema.url()))
})

Given("{actor} uses definition='{}' issued with did='{}'", async function (cloudAgent: Actor, def: string, did: string) {
  assert(Setup[did][def])
  let a = Setup[did][def]
  await cloudAgent.attemptsTo(notes().set('definition_guid', Setup[did][def].guid))
  await cloudAgent.attemptsTo(notes().set('definition_id', Setup[did][def].id()))
})

When("{actor} offers '{int}' jwt credentials", async function (cloudAgent: Actor, numberOfCredentials: number) {
  const recordIdList = []
  await Utils.repeat(numberOfCredentials, async () => {
    await CloudAgentWorkflow.offerJwtCredential(cloudAgent)
    recordIdList.push(await cloudAgent.answer(notes().get("recordId")))
  })
  await cloudAgent.attemptsTo(
    notes().set("recordIdList", recordIdList)
  )
})

When("{actor} offers '{int}' sd+jwt credentials", async function (cloudAgent: Actor, numberOfCredentials: number) {
  const recordIdList = []
  await Utils.repeat(numberOfCredentials, async () => {
    await CloudAgentWorkflow.offerSDJWTCredential(cloudAgent)
    recordIdList.push(await cloudAgent.answer(notes().get("recordId")))
  })
  await cloudAgent.attemptsTo(
    notes().set("recordIdList", recordIdList)
  )
})

When("{actor} offers '{int}' anonymous credential", async function (cloudAgent: Actor, numberOfAnoncreds: number) {
  const recordIdList = []
  await Utils.repeat(numberOfAnoncreds, async () => {
    await CloudAgentWorkflow.offerAnonymousCredential(cloudAgent)
    recordIdList.push(await cloudAgent.answer(notes().get("recordId")))
  })
  await cloudAgent.attemptsTo(
    notes().set("recordIdList", recordIdList)
  )
})

When("{actor} asks for sdjwt present-proof", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForSDJWTPresentProof(cloudAgent)
})

When("{actor} asks for present-proof", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProof(cloudAgent)
})

When("{actor} asks for presentation of AnonCred proof", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProofAnonCreds(cloudAgent)
})

When("{actor} asks for presentation of AnonCred proof with unexpected attributes", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProofAnonCredsWithUnexpectedAttributes(cloudAgent)
})

When("{actor} asks for presentation of AnonCred proof with unexpected values", async function (cloudAgent: Actor) {
  await CloudAgentWorkflow.askForPresentProofAnonCredsWithUnexpectedValues(cloudAgent)
})

When("{actor} revokes '{int}' credentials", async function (cloudAgent: Actor, numberOfRevokedCredentials: number) {
  await CloudAgentWorkflow.revokeCredential(cloudAgent, numberOfRevokedCredentials)
})

Then("{actor} should have the connection status updated to '{}'", async (cloudAgent: Actor, expectedStatus: string) => {
  await CloudAgentWorkflow.waitForConnectionState(cloudAgent, expectedStatus)
})

Then("{actor} should see the present-proof is verified", async (cloudAgent: Actor) => {
  await CloudAgentWorkflow.verifyPresentProof(cloudAgent, "PresentationVerified")
})

Then("{actor} should see the present-proof is not verified", async (cloudAgent: Actor) => {
  await CloudAgentWorkflow.verifyPresentProof(cloudAgent, "PresentationFailed")
})

Then("{actor} should see all credentials were accepted", async (cloudAgent: Actor) => {
  const recordIdList = await cloudAgent.answer<string[]>(notes().get("recordIdList"))
  for (const recordId of recordIdList) {
    await CloudAgentWorkflow.verifyCredentialState(cloudAgent, recordId, "CredentialSent")
  }
})
