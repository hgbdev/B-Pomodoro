import React, { useCallback, useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

function TimerComponent(props) {
  const { minute, isStart, stopTimer } = props;
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    setTime({ sec: 0, min: minute });
    const timer = setInterval(() => {
      setTime((preTime) => {
        if (preTime.min <= 0 && preTime.sec <= 0) {
          clearInterval(timer);
          setTurn(turn + 1);
          return { ...preTime };
        } else {
          if (preTime.sec <= 0) {
            return {
              sec: 59,
              min: preTime.min > 0 ? preTime.min - 1 : 0,
            };
          } else {
            return {
              min: preTime.min,
              sec: preTime.sec > 0 ? preTime.sec - 1 : 0,
            };
          }
        }
      });
    }, 50);

    if (isStart === false) {
      clearInterval(timer);
      stopTimer();
    }

    return () => clearInterval(timer);
  }, [isStart]);

  useEffect(() => {
    stopTimer();
  }, [turn]);

  function pad2(number) {
    return (number < 10 ? '0' : '') + number;
  }

  return (
    <div
      className="timer-container"
      style={{
        fontSize: 50,
        color: '#FFF',
      }}
    >
      {pad2(time.min)}:{pad2(time.sec)}
    </div>
  );
}

TimerComponent.propTypes = {
  minute: PropTypes.number,
  isStart: PropTypes.bool,
};

export default TimerComponent;
