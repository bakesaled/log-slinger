import { LogLevel } from './log-level';
import { LogSlinger } from './log-slinger';

describe('LogSlinger', () => {
  let logger;
  it('should create', () => {
    logger = new LogSlinger();
    expect(logger).toBeDefined();
  });

  it('should default to a LogLevel of None', () => {
    logger = new LogSlinger();
    /* tslint:disable-next-line:no-string-literal */
    expect(logger['logLevel']).toBe(LogLevel.None);
  });

  it('should write message to console', () => {
    logger = new LogSlinger(LogLevel.All);
    const spy = spyOn(console, 'info');
    /* tslint:disable-next-line:no-string-literal */
    logger['writeToConsole']('info', 'cookie');
    expect(spy).toHaveBeenCalledWith('cookie');
  });

  it('should write message with params to console', () => {
    logger = new LogSlinger(LogLevel.All);
    const spy = spyOn(console, 'error');
    /* tslint:disable-next-line:no-string-literal */
    logger['writeToConsole']('error', 'pie', '5 slices');
    expect(spy).toHaveBeenCalledWith('pie', '5 slices');
  });
});
