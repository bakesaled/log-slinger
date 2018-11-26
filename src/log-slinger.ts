import { LogLevel } from './log-level';

export class LogSlinger {
  constructor(private logLevel: LogLevel) {}

  public info(msg: string, ...params: any[]) {
    if (this.logLevel <= LogLevel.Info) {
      if (params.length) {
        /* tslint:disable-next-line:no-console */
        console.info(msg, params);
      } else {
        /* tslint:disable-next-line:no-console */
        console.info(msg);
      }
    }
  }
}
