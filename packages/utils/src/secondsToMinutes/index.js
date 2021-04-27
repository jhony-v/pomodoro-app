import { format } from 'fecha';

export default function secondsToMinutes(seconds) {
  return format(new Date(seconds * 1000), 'mm:ss');
}
