const { Settings } = require('./database');

const EVENT = {
  GET_SETTINGS: 'GET_SETTINGS',
};

const controller = async (event, data) => {
  switch (event) {
    case EVENT.GET_SETTINGS: {
      try {
        const dataGetFromSQLite = await Settings.findAll();
        console.log(dataGetFromSQLite[1].name_setting);
        return { success: true, results: dataGetFromSQLite };
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
