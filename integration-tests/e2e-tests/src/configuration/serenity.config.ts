import { BeforeAll, defineParameterType, setDefaultTimeout } from "@cucumber/cucumber"
import { actorCalled, actorInTheSpotlight, configure } from "@serenity-js/core"
import { resolve } from "node:path"

setDefaultTimeout(5 * 60 * 1000)

Error.stackTraceLimit = Infinity

BeforeAll(function () {
  // Configure Serenity/JS
  configure({
    crew: [
      ["@serenity-js/console-reporter", { theme: "auto" }],
      ["@serenity-js/core:ArtifactArchiver", { outputDirectory: resolve(__dirname, "../../target/site/serenity") }],
      ["@serenity-js/serenity-bdd", {
        reporter: {
          specDirectory: resolve(__dirname),
          includeAbilityDetails: true,
        },
      }],
    ]
  })
})

defineParameterType({
  regexp: /[A-Za-z0-9]+(?: [A-Za-z0-9]+)*/,
  transformer(name: string) {
    return actorCalled(name)
  },
  name: "actor",
})

defineParameterType({
  regexp: /he|she|they|his|her|their/,
  transformer() {
    return actorInTheSpotlight()
  },
  name: "pronoun",
})
