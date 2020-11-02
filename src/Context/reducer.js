import { ACTION_TYPE } from './actions';

export const initialState = {
  time: 10,
  isStart: false,
  isOpenSetting: false,
  isOpenModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_TIMER: {
      const { time } = action.payload;
      return {
        ...state,
        time,
      };
    }

    case ACTION_TYPE.START_TIMER: {
      return {
        ...state,
        isStart: true,
      };
    }

    case ACTION_TYPE.STOP_TIMER: {
      return {
        ...state,
        isStart: false,
        time: 0,
      };
    }

    case ACTION_TYPE.OPEN_SETTING: {
      return { ...state, isOpenSetting: true };
    }

    case ACTION_TYPE.CLOSE_SETTING: {
      return {
        ...state,
        isOpenSetting: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
