import { LogLevel } from './log-level';
import { LogSlinger } from './log-slinger';

describe('LogSlinger', () => {
  const logger = new LogSlinger(LogLevel.All);
  it('should create', () => {
    expect(logger).toBeDefined();
  });
});
