import React, { useState, useEffect, useContext } from 'react';
import TimerComponent from './TimerComponent';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/md';
import { Context } from './../Context/context';
import MenuComponent from './MenuComponent';
import PopupSettingComponent from './PopupSettingComponent';
import { stopTimer } from '../Context/actions';

function HomeScreen(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);
  useEffect(() => {}, [state]);

  return (
    <>
      <div className="home-screen">
        {/* <TimerComponent
          isStart={state.isStart}
          minute={state.time}
          stopTimer={() => dispatch(stopTimer())}
        /> */}
        <MenuComponent />
        <PopupSettingComponent />
      </div>
    </>
  );
}

HomeScreen.propTypes = {};

export default HomeScreen;
