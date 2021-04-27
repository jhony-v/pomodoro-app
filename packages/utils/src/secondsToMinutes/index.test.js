import secondsToMinutes from '.';

const dataSecondsToMinutesFormat = [
  [60, '01:00'],
  [120, '02:00'],
  [0, '00:00'],
  [30, '00:30'],
];

describe('Utils', () => {
  it('should format a minute', () => {
    dataSecondsToMinutesFormat.forEach(([seconds, formatMinutes]) => {
      const secondsFormat = secondsToMinutes(seconds);
      expect(secondsFormat).toBe(formatMinutes);
    });
  });
});
