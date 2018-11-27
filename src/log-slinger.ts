import { LogLevel } from './log-level';

export class LogSlinger {
  constructor(private logLevel: LogLevel = LogLevel.None) {}

  public info(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Info) {
      this.writeToConsole('info', msg, ...params);
    }
  }

  public debug(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Debug) {
      this.writeToConsole('debug', msg, ...params);
    }
  }

  public warn(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Warn) {
      this.writeToConsole('warn', msg, ...params);
    }
  }

  public error(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Error) {
      this.writeToConsole('error', msg, ...params);
    }
  }

  private writeToConsole(methodName: string, msg: string, ...params: any[]) {
    /* tslint:disable-next-line:no-console */
    (console as any)[methodName](msg, ...params);
  }
}
