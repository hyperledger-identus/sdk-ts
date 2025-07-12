import { Domain } from "../../../exports";

export interface IBackupTask {
  run(): Promise<Domain.Backup.Schema>;
}

export interface IRestoreTask {
  run(): Promise<void>;
}
