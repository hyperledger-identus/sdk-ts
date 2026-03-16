import { AfterAll, Before, BeforeAll } from "@cucumber/cucumber"
import { type Actor, actorCalled, type Cast, engage, TakeNotes } from "@serenity-js/core"
import { CallAnApi } from "@serenity-js/rest"
import { Utils } from "../Utils"
import { agentList, WalletSdk } from "../abilities/WalletSdk"
import { cloudAgentApi, Setup } from "../configuration/Setup"

BeforeAll(async () => {
  Utils.prepareNotes()
  await Setup.init()
})

Before(() => {
  Actors.createAndEngageActors()
})

AfterAll(() => {
  if (agentList.size > 0) {
    console.warn("Found dangling agents in the end of execution. Explicitly removing them, please check lifecycle.")
    console.warn([...agentList.keys()])
    for (const v of new Map(agentList).values()) {
      void v.discard()
    }
  }
})

class Actors implements Cast {
  actors = new Map<string, Actor>()

  static createAndEngageActors() {
    const actors = new Actors()

    const cloudAgent = actorCalled("Cloud Agent").whoCan(
      CallAnApi.using(cloudAgentApi),
      TakeNotes.usingAnEmptyNotepad()
    )

    const edgeAgent = actorCalled("Edge Agent").whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      WalletSdk.withANewInstance()
    )

    const verifierEdgeAgent = actorCalled("Verifier Edge Agent").whoCan(
      TakeNotes.usingAnEmptyNotepad(),
      WalletSdk.withANewInstance()
    )

    actors.add(cloudAgent)
    actors.add(edgeAgent)
    actors.add(verifierEdgeAgent)
    engage(actors)
  }

  add(actor: Actor) {
    this.actors.set(actor.name, actor)
  }

  prepare(actor: Actor): Actor {
    if (!this.actors.has(actor.name)) {
      return actor
    }
    return this.actors.get(actor.name)!
  }
}
