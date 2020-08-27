const getCurrentTime = () => new Date();

const oneSecond = () => 1000;

const serializeClockTime = (date) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

module.exports = { getCurrentTime, serializeClockTime, oneSecond };
