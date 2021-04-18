import React from 'react';
import './style/globalTheme';
import Pomodoro from './containers/Pomodoro';
import "./registerServiceWorker";
import PomodoroListTimers from './containers/PomodoroListTimers';

const App = () => {
  return (
    <>
      <Pomodoro />
      <PomodoroListTimers />
    </>
  );
};

export default App;
