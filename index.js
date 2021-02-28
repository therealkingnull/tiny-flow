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

console.log(age('08/08/2008'))
//EXPORTS
module.exports = {
  age,
  timeUntil,
};