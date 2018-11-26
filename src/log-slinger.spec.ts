import { LogLevel } from './log-level';
import { LogSlinger } from './log-slinger';

describe('LogSlinger', () => {
  const logger = new LogSlinger(LogLevel.All);
  it('should create', () => {
    expect(logger).toBeDefined();
  });

  it('should write message to console', () => {
    const spy = spyOn(console, 'info');
    /* tslint:disable-next-line:no-string-literal */
    logger['writeToConsole']('info', 'cookie');
    expect(spy).toHaveBeenCalledWith('cookie');
  });

  it('should write message with params to console', () => {
    const spy = spyOn(console, 'error');
    /* tslint:disable-next-line:no-string-literal */
    logger['writeToConsole']('error', 'pie', '5 slices');
    expect(spy).toHaveBeenCalledWith('pie', '5 slices');
  });
});
