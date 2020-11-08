export function getValueFomName(data, name) {
  try {
    const result = data.find(({ dataValues }) => {
      return dataValues.name_setting === name;
    });
    return result.dataValues.value_setting;
  } catch (err) {
    return null;
  }
}
