import React from 'react';
import "./registerServiceWorker";
import './style/globalTheme';
import Pomodoro from './containers/Pomodoro';
import LazyPomodoroListTimers from './containers/PomodoroListTimers/Lazy';
import ColumnsApplication from './components/ColumnsApplication';


const App = () => {
  return (
    <ColumnsApplication>
      <Pomodoro />
      <LazyPomodoroListTimers />
    </ColumnsApplication>
  );
};

export default App;
