import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdMenu, MdSettings, MdPlayArrow, MdStop } from 'react-icons/md';
import { Context } from './../Context/context';
import {
  setTimer,
  startTimer,
  stopTimer,
  openSetting,
  closeSetting,
} from './../Context/actions';

function MenuComponent(props) {
  const {} = props;
  const [state, dispatch] = useContext(Context);
  return (
    <div className="menu-container">
      {!state.isStart ? (
        <Button
          variant="secondary"
          onClick={() => {
            console.log('button');
            dispatch(setTimer({ time: 1 }));
            dispatch(startTimer());
          }}
        >
          <MdPlayArrow />
        </Button>
      ) : (
        <Button
          variant="secondary"
          onClick={() => {
            console.log('button');
            dispatch(setTimer({ time: 1 }));
            dispatch(stopTimer());
          }}
        >
          <MdStop />
        </Button>
      )}{' '}
      <Button
        variant="secondary"
        onClick={() => {
          dispatch(openSetting());
        }}
      >
        <MdSettings />
      </Button>
    </div>
  );
}

MenuComponent.propTypes = {};

export default MenuComponent;
