export const ACTION_TYPE = {
  SET_TIMER: 'SET_TIMER',
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  OPEN_SETTING: 'OPEN_SETIING',
  CLOSE_SETTING: 'CLOSE_SETIING',
  GET_SETTINGS: 'GET_SETTINGS',
};

export function setTimer(payload) {
  return {
    type: ACTION_TYPE.SET_TIMER,
    payload,
  };
}

export function startTimer(payload) {
  return {
    type: ACTION_TYPE.START_TIMER,
    payload,
  };
}

export function stopTimer(payload) {
  return {
    type: ACTION_TYPE.STOP_TIMER,
    payload,
  };
}

export function openSetting(payload) {
  return {
    type: ACTION_TYPE.OPEN_SETTING,
    payload,
  };
}

export function closeSetting(payload) {
  return {
    type: ACTION_TYPE.CLOSE_SETTING,
    payload,
  };
}

export function getSettings(payload) {
  return {
    type: ACTION_TYPE.GET_SETTINGS,
    payload,
  };
}
