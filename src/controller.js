const { Setting } = require('./database');

const EVENT = {
  GET_DATA: 'GET_DATA',
};

const controller = async (event, data) => {
  switch (event) {
    case EVENT.GET_DATA: {
    }

    default: {
      return null;
    }
  }
};

module.exports = controller;
