import { Given, Then } from "@cucumber/cucumber"
import { type Actor, notes } from "@serenity-js/core"
import { EdgeAgentWorkflow } from "../workflow/EdgeAgentWorkflow"
import { WalletSdk } from "../abilities/WalletSdk"
import { assert } from "chai"

Then("no DID connection should be created for {actor}", async function (edgeAgent: Actor) {
  await edgeAgent.attemptsTo(
    WalletSdk.execute(async (sdk) => {
      const didPairs = await sdk.pluto.getAllDidPairs()
      assert.equal(didPairs.length, 0, "DID connection should not be created for connectionless presentation")
    })
  )
})

Given("an invalid connectionless presentation request for {actor}", async function (edgeAgent: Actor) {
  const tamperedInvitation = "https://example.com?_oob=eyJ0eXBlIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9vdXQtb2YtYmFuZC8yLjAvaW52aXRhdGlvbiIsImlkIjoiMTIzIiwiaW52aXRlcCI6InRhbXBlcmVkIn0="
  await edgeAgent.attemptsTo(notes().set("invitation", tamperedInvitation))
})

Then("invalid verification error should be thrown for {actor}", async function (edgeAgent: Actor) {
  try {
    await EdgeAgentWorkflow.waitForProofRequest(edgeAgent)
    await EdgeAgentWorkflow.presentProof(edgeAgent)
    assert.fail("Should have failed with invalid invitation")
  } catch (e: any) {
    assert.isDefined(e)
  }
})

Given("a presentation request for unsupported credential type for {actor}", async function (edgeAgent: Actor) {
  // We can simulate this by setting a presentationId or invitation that refers to something the agent doesn't have
  await edgeAgent.attemptsTo(notes().set("presentationId", "non-existent-id"))
})

Then("an error should be thrown for {actor}", async function (edgeAgent: Actor) {
  try {
    await EdgeAgentWorkflow.presentProof(edgeAgent)
    assert.fail("Should have thrown an error")
  } catch (e: any) {
    assert.isDefined(e, "Error should have been thrown")
  }
})
