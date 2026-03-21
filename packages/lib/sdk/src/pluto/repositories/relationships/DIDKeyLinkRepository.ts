
import type { Pluto } from "../../Pluto";
import { LinkRepository } from "../builders/LinkRepository";

export class DIDKeyLinkRepository extends LinkRepository<"didkey-link"> {
  constructor(store: Pluto.Store) {
    super(store, "didkey-link");
  }
}
