import { RIDB } from "@trust0/ridb";
import { schemas } from "../db";

export const hasDB = (db: RIDB<typeof schemas> | null):
    db is RIDB<typeof schemas> => db !== null;