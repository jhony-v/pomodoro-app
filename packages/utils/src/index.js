import { format } from 'fecha';
export const secondsToMinutes = (seconds) =>
  format(new Date(seconds * 1000), 'mm:ss');
