import * as chalk from "chalk";
import { SelectPrompt } from ".";
import * as Fns from "../sdkFns";

// alias SelectPrompt
const Menu = (...args: ConstructorParameters<typeof SelectPrompt>) => new SelectPrompt(...args);

/**
 * define the routing tree for the app
 */
export const rootMenu = Menu("")
  .showExit()
  .addOption(
    Menu(state => `DIDComm [${typeof state.AgentDC?.state === "string" ? chalk.green(state.AgentDC?.state) : chalk.red("not started")}]`)
      .addOption(Fns.UpdateMediatorDID)
      .addOption(Fns.DIDCommStart)
      .addOption(
        Menu("OOB")
          .addOption(Fns.InputOOB)
      )
      .addOption(Fns.Connections.ListConnections)
      .addOption(
        Menu("Messages")
          .addOption(Fns.ListMessages)
        // send
      )
      .addOption(
        Menu("Credentials")
      )
  )
  .addOption(
    Menu("OIDC")
      .addOption(Fns.OIDC.InputOfferUri)
      .addOption(Fns.OIDC.InputCallbackUrl)
      .addOption(Fns.OIDC.SendCredentialRequest)
  )
  .addOption(
    Menu("DIDs")
      .addOption(Fns.DIDs.ResolveDID)
    // create did
  );

// Castor > verifySignature
