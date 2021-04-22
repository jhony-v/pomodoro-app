import React from 'react';
import "./registerServiceWorker";
import './style/globalTheme';
import Pomodoro from './containers/Pomodoro';
import LazyPomodoroListTimers from './containers/PomodoroListTimers/Lazy';


const App = () => {
  return (
    <>
      <Pomodoro />
      <LazyPomodoroListTimers />
    </>
  );
};

export default App;
