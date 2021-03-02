//imports
const { ageFunc } = require('./src/utils/age')

//age
const age = (dateString) => {
  return ageFunc(dateString)
};

//timeUntil
const timeUntil = () => {
  throw new Error("Not released yet");
};

//EXPORTS
module.exports = {
  age,
  timeUntil,
};
