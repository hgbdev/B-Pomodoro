import React, { useState, useEffect, useContext } from 'react';
import TimerComponent from './TimerComponent';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/md';
import { Context } from './../Context/context';
import MenuComponent from './MenuComponent';
import PopupSettingComponent from './PopupSettingComponent';
import {
  ACTION_TYPE,
  getSettings,
  setTimer,
  stopTimer,
} from '../Context/actions';
import { getValueFomName } from '../Utils/helpers';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function HomeScreen(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);
  const [time, setTime] = useState(0);
  useEffect(() => {
    ipcRenderer.send('react-message', { event: ACTION_TYPE.GET_SETTINGS });
    ipcRenderer.on('electron-reply', (e, arg) => {
      const { results } = arg;
      dispatch(getSettings({ settings: results }));
      console.log(state);
    });
  }, []);

  useEffect(() => {
    console.log(
      'LOG 2: ',
      parseInt(getValueFomName(state.settings, 'pomodoro'))
    );
    setTime(parseInt(getValueFomName(state.settings, 'pomodoro')) || 0);
  }, [state.settings]);

  return (
    <>
      <PopupSettingComponent />
      <div className="home-screen">
        <TimerComponent
          isStart={state.isStart}
          minute={time}
          stopTimer={() => dispatch(stopTimer())}
        />
        <button onClick={() => console.log(state)}>das</button>
        <MenuComponent />
      </div>
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
