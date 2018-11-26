import { LogLevel } from './log-level';

export class LogSlinger {
  constructor(private logLevel: LogLevel) {}

  public info(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Info) {
      if (params.length) {
        console.info(msg, params);
      } else {
        console.info(msg);
      }
    }
  }
}
