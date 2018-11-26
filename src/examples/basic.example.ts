import { LogSlinger } from '../log-slinger';
import { LogLevel } from '../log-level';

export class BasicExample {
  private logger: LogSlinger;
  constructor() {
    this.logger = new LogSlinger(LogLevel.All);
  }

  init() {
    this.logger.info('testing info234');
  }
}
