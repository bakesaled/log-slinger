import { LogLevel } from '../log-level';
import { LogSlinger } from '../log-slinger';

export class BasicExample {
  private logger: LogSlinger;
  constructor() {
    this.logger = new LogSlinger(LogLevel.All);
  }

  public init() {
    this.logger.info('testing info234');
  }
}
