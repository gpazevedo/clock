const { compose } = require("./compose");

const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

const formatClock = (format) => (time) =>
  format
    .replace("yyyy", time.year)
    .replace("oo", time.month)
    .replace("dd", time.day)
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = (key) => (clockTime) => {
  const formated = {
    ...clockTime,
  };
  formated[key] = clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key];
  return formated;
};

const convertToCivilianTime = (clockTime) =>
  compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = (civilianTime) =>
  compose(
    prependZero("month"),
    prependZero("day"),
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime);

module.exports = {
  doubleDigits,
  convertToCivilianTime,
  prependZero,
  formatClock,
  appendAMPM,
  civilianHours,
};
