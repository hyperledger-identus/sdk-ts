import { type Backup } from "@hyperledger/identus-domain";

export interface IBackupTask {
  run(): Promise<Backup.Schema>;
}

export interface IRestoreTask {
  run(): Promise<void>;
}
