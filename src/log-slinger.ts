import { LogLevel } from './log-level';

export class LogSlinger {
  constructor(private logLevel: LogLevel) {}

  public info(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Info) {
      this.writeToConsole('info', msg, params);
    }
  }

  private writeToConsole(methodName: string, msg: string, ...params: any[]) {
    /* tslint:disable-next-line:no-console */
    (console as any)[methodName](msg, ...params);
  }
}
