import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import {
  getUserTimers,
  getMe,
  createTimer,
  createAnonymousUser,
} from './services';

function Response({ data, error }) {
  return {
    data,
    loading: !data && !error,
    error,
  };
}

export function useGetUserTimers() {
  const request = useSWR('/me/timers', getUserTimers, {
    revalidateOnFocus: false,
  });
  return Response(request);
}

export function useMe() {
  const request = useSWR('/me', getMe);
  return Response(request);
}

export function useMutationCreateTimer() {
  const onAddTimer = async (payload) => {
    await createTimer(payload);
    return await mutate('/me/timers');
  };
  return {
    onAddTimer,
  };
}

export function useAutoCreateAnonymousUser() {
  useEffect(() => {
    if (!localStorage.userId) {
      createAnonymousUser().then((request) => {
        localStorage.userId = request._id;
      });
    }
  }, []);
}
