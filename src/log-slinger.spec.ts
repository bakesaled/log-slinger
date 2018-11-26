import { LogSlinger } from './log-slinger';
import { LogLevel } from './log-level';

describe('LogSlinger', () => {
  let logger = new LogSlinger(LogLevel.All);
  it('should create', () => {
    expect(logger).toBeDefined();
  });
});
