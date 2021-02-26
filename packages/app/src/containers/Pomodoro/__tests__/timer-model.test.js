import { timer } from '../models';

const initialMinutes = 1;
const initialSeconds = initialMinutes * 60;

describe('timer-model', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should have initial data in store', () => {
    expect(timer.$completed.getState()).toBeFalsy();
    expect(timer.$seconds.getState()).toEqual(initialSeconds);
    expect(timer.$running.getState()).toBeFalsy();
    expect(timer.$progressPercentaje.getState()).toEqual(0);
  });

  it('should run and pause timer', () => {
    timer.onToggleRunning();
    jest.advanceTimersByTime(1000);
    expect(timer.$completed.getState()).toBeFalsy();
    expect(timer.$seconds.getState()).toBeLessThan(initialSeconds);
    expect(timer.$running.getState()).toBeTruthy();
    expect(timer.$progressPercentaje.getState()).toBeGreaterThanOrEqual(0);
    timer.onToggleRunning();
    expect(timer.$completed.getState()).toBeFalsy();
    expect(timer.$running.getState()).toBeFalsy();
    expect(timer.$progressPercentaje.getState()).toBeGreaterThanOrEqual(0);
  });

  it('should reset timer counter', () => {
    timer.resetCounter();
    expect(timer.$completed.getState()).toBeFalsy();
    expect(timer.$seconds.getState()).toEqual(initialSeconds);
    expect(timer.$running.getState()).toBeFalsy();
    expect(timer.$progressPercentaje.getState()).toEqual(0);
  });
});
