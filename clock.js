const { compose } = require("./compose");
const { clear, log } = require("./services");
const {
  doubleDigits,
  convertToCivilianTime,
  prependZero,
  formatClock,
} = require("./adapters");
const { getCurrentTime, serializeClockTime, oneSecond } = require("./domain");

const display = (target) => (time) => target(time);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("dd/oo/yyyy hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );

startTicking();

module.exports = {
  serializeClockTime,
  convertToCivilianTime,
  prependZero,
  doubleDigits,
};
