import { type Pluto } from "@hyperledger/identus-sdk";

export const hasDB = (db: Pluto | null): db is Pluto => db !== null;