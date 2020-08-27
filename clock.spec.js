const {
  serializeClockTime,
  convertToCivilianTime,
  prependZero,
  doubleDigits,
} = require("./clock");

const testDate = new Date(Date.parse("04 JUN 2020 16:08:07 GMT"));
console.log(testDate.getFullYear());

describe("Ticking Clock", () => {
  it("serializes clock time", () => {
    const expected = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 13,
      minutes: 8,
      seconds: 7,
    };
    expect(serializeClockTime(testDate)).toEqual(expected);
  });

  it("Convert To Civilian Time", () => {
    const expected = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };
    expect(convertToCivilianTime(serializeClockTime(testDate))).toEqual(
      expected
    );
  });

  it("Convert prependZero", () => {
    const expected = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };
    // expect(
    //   prependZero(
    //     "minutes",
    //     convertToCivilianTime(serializeClockTime(testDate))
    //   )
    expect(prependZero(expected)).toEqual(expected);
  });

  // it("Convert doubleDigits", () => {
  //   const expected = {
  //     year: 2020,
  //     month: 5,
  //     day: 4,
  //     hours: 1,
  //     minutes: 8,
  //     seconds: 7,
  //     ampm: "PM",
  //   };
  //   expect(
  //     doubleDigits(convertToCivilianTime(serializeClockTime(testDate)))
  //   ).toEqual(expected);
  // });
});
