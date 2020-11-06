const { Settings } = require('./database');

const EVENT = {
  GET_DATA: 'GET_DATA',
};

const controller = async (event, data) => {
  switch (event) {
    case EVENT.GET_DATA: {
      try {
        const dataGetFromSQLite = await Settings.findAll();
        console.log(dataGetFromSQLite[1]);
        return { success: true, dataGetFromSQLite };
      } catch (err) {
        return {
          success: false,
          msg: 'Get data is failed.',
        };
      }
    }

    default: {
      return { success: false, msg: 'Event data has problem.' };
    }
  }
};

module.exports = controller;
