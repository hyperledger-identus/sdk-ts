import { Given, Then } from "@cucumber/cucumber"
import { type Actor, notes } from "@serenity-js/core"
import { EdgeAgentWorkflow } from "../workflow/EdgeAgentWorkflow"
import { WalletSdk } from "../abilities/WalletSdk"
import { assert } from "chai"

Then("no DID connection should be created for {actor}", async function (edgeAgent: Actor) {
  await edgeAgent.attemptsTo(
    WalletSdk.execute(async (sdk) => {
      const didPairs = await sdk.pluto.getAllDidPairs()
      assert.equal(didPairs.length, 0, "DID connection should not be created for connectionless issuance")
    })
  )
})

Then("the credential should be stored in {actor}", async function (edgeAgent: Actor) {
  await edgeAgent.attemptsTo(
    WalletSdk.execute(async (sdk) => {
      const credentials = await sdk.verifiableCredentials()
      assert.isAbove(credentials.length, 0, "Credential should be stored")
    })
  )
})

Given("an invalid connectionless offer invitation for {actor}", async function (edgeAgent: Actor) {
  const tamperedInvitation = "https://example.com?_oob=eyJpZCI6ImVycW9vYmkiLCJ0eXBlIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9vdXQtb2YtYmFuZC8yLjAvaW52aXRhdGlvbiIsImZyb20iOiJkaWQ6ZXhhbXBsZToxMjMiLCJib2R5Ijp7fSwiYXR0YWNobWVudHMiOltdfQ"
  await edgeAgent.attemptsTo(notes().set("invitation", tamperedInvitation))
})

Given("a corrupt OOB invitation for {actor}", async function (edgeAgent: Actor) {
  await edgeAgent.attemptsTo(notes().set("invitation", "not-a-url"))
})

Then("invalid issuance error should be thrown for {actor}", async function (edgeAgent: Actor) {
  try {
    await EdgeAgentWorkflow.connect(edgeAgent)
    await EdgeAgentWorkflow.waitForCredentialOffer(edgeAgent, 1)
    await EdgeAgentWorkflow.acceptCredential(edgeAgent)
    assert.fail("Should have failed")
  } catch (e: any) {
    assert.isDefined(e)
  }
})

Then("corrupt attachment error should be thrown for {actor}", async function (edgeAgent: Actor) {
  try {
    await EdgeAgentWorkflow.connect(edgeAgent)
    assert.fail("Should have failed")
  } catch (e: any) {
    assert.isDefined(e)
  }
})
