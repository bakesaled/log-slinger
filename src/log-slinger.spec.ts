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

  it('should not log message if LogLevel is too high', () => {
    logger = new LogSlinger(LogLevel.Info);
    const spy = spyOn(logger as any, 'writeToConsole');
    logger.debug('ice cream');
    expect(spy).not.toHaveBeenCalledWith('debug', 'ice cream');
  });

  it('should log info', () => {
    logger = new LogSlinger(LogLevel.Info);
    const spy = spyOn(logger as any, 'writeToConsole');
    logger.info('cake');
    expect(spy).toHaveBeenCalledWith('info', 'cake');
  });

  it('should log debug', () => {
    logger = new LogSlinger(LogLevel.Debug);
    const spy = spyOn(logger as any, 'writeToConsole');
    logger.debug('muffin');
    expect(spy).toHaveBeenCalledWith('debug', 'muffin');
  });

  it('should log warn', () => {
    logger = new LogSlinger(LogLevel.Warn);
    const spy = spyOn(logger as any, 'writeToConsole');
    logger.warn('donut');
    expect(spy).toHaveBeenCalledWith('warn', 'donut');
  });

  it('should log error', () => {
    logger = new LogSlinger(LogLevel.Error);
    const spy = spyOn(logger as any, 'writeToConsole');
    logger.error('milk shake');
    expect(spy).toHaveBeenCalledWith('error', 'milk shake');
  });
});
