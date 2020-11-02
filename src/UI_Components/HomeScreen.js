import React, { useState, useEffect, useContext } from 'react';
import TimerComponent from './TimerComponent';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/md';
import { Context } from './../Context/context';
import MenuComponent from './MenuComponent';
import PopupSettingComponent from './PopupSettingComponent';
import { stopTimer } from '../Context/actions';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function HomeScreen(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    //ipcRenderer.send('asynchronous-message', { obj1: 'a', obj2: 'b' });
    console.log(state.isOpenSetting);
  }, [state.isOpenSetting]);

  return (
    <>
      <div
        className="home-screen"
        style={{ display: state.isOpenSetting ? 'none' : null }}
        onClick={() => console.log('zxczxc')}
      >
        <TimerComponent
          isStart={state.isStart}
          minute={state.time}
          stopTimer={() => dispatch(stopTimer())}
        />{' '}
        */}
        <MenuComponent />
        <PopupSettingComponent />
      </div>
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
