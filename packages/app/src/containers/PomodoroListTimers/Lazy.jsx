import React, { lazy, Suspense } from 'react'
import { useGetUserTimers } from '@pomodoro/app-service'

const AsyncPomodoroListTimers = lazy(() => import("."))

const LazyPomodoroListTimers = () => {
  const { error, loading } = useGetUserTimers();
  if (error || loading) return null;
  return (
    <Suspense fallback={null}>
      <AsyncPomodoroListTimers />
    </Suspense>
  )
}

export default LazyPomodoroListTimers
