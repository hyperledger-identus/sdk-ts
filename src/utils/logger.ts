
// ================================
// === Logger ===
// ================================

export interface Logger {
  /**
   * very verbose information for debugging purposes
   */
  debug(message: string, ...params: any[]): void;
  /**
   * verbose information about normal operation
   */
  info(message: string, ...params: any[]): void;
  /**
   * expected information that might warrant require attention
   */
  warn(message: string, ...params: any[]): void;
  /**
   * unexpected or critical information
   */
  error(message: string, ...params: any[]): void;
}

export type LogLevel = "debug" | "info" | "warn" | "error" | "none";

export class ConsoleLogger implements Logger {
  private level: number;

  constructor(logLevel?: LogLevel) {
    this.level = this.getLogLevel(logLevel ?? "error");
  }

  getLogLevel(level: LogLevel): number {
    switch (level) {
      case "none": return 1;
      case "debug": return 2;
      case "info": return 3;
      case "warn": return 4;
      case "error": return 5;
    }
  }

  debug(message: string, ...params: any[]) {
    this.log("debug", message, ...params);
  }

  info(message: string, ...params: any[]) {
    this.log("info", message, ...params);
  }

  warn(message: string, ...params: any[]) {
    this.log("warn", message, ...params);
  }

  error(message: string, ...params: any[]) {
    this.log("error", message, ...params);
  }

  private log(level: LogLevel, message: string, ...params: any[]) {
    const logLevel = this.getLogLevel(level);

    if (logLevel >= this.level) {
      const item = {
        level,
        // identifier: this.identifier ?? "",
        time: Date.now(),
        message,
        // params
      };

      if (params.length > 0) {
        Object.assign(item, { params });
      }

      const output = JSON.stringify(item, null, 2);
      // const output = JSON.stringify(item);
      console.log(output);
    }
  }
}
