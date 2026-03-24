
import type { Pluto } from "../../Pluto";
import { LinkRepository } from "../builders/LinkRepository";

export class DIDLinkRepository extends LinkRepository<"did-link"> {
  constructor(store: Pluto.Store) {
    super(store, "did-link");
  }
}
