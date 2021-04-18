import axios from 'axios';
import { BASE_URL } from './config';

const POMODORO = axios.create({
  baseURL: BASE_URL,
  maxContentLength: 2000000,
  maxRedirects: 3,
  withCredentials: false,
  timeout: 40000,
});

POMODORO.interceptors.request.use((request) => {
  if (localStorage.userId) {
    request.headers.authorization = localStorage.userId;
  }
  return request;
});

export const createTimer = async (payload) => {
  const body = {
    ...payload,
    userId: localStorage.userId,
  };
  return POMODORO.post('/timers', body).then((e) => e.data);
};

export const createAnonymousUser = async () => {
  const body = {
    fromDevice: navigator.userAgent,
    theme: window.matchMedia('(prefers-color-scheme:light)').matches
      ? 'light'
      : 'dark',
  };
  return POMODORO.post('/users/anonymous', body).then((e) => e.data);
};

export const getUserTimers = async () => {
  const userId = localStorage.getItem('userId');
  return POMODORO.get(`/users/${userId}/timers`).then((e) => e.data);
};

export const getMe = async () => {
  return POMODORO.get(`/users/me`).then((e) => e.data);
};
