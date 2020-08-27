const {
  serializeClockTime,
  convertToCivilianTime,
  prependZero,
  doubleDigits,
} = require("./clock");

const testDate = new Date(Date.parse("2020-08-04T20:08:04.052Z"));

describe("Ticking Clock", () => {
  it("serializes clock time", () => {
    const expected = {
      year: 2020,
      month: 8,
      day: 4,
      hours: 17,
      minutes: 8,
      seconds: 4,
    };
    expect(serializeClockTime(testDate)).toEqual(expected);
  });

  it("Convert To Civilian Time", () => {
    const expected = {
      year: 2020,
      month: 8,
      day: 4,
      hours: 5,
      minutes: 8,
      seconds: 4,
      ampm: "PM",
    };
    expect(convertToCivilianTime(serializeClockTime(testDate))).toEqual(
      expected
    );
  });

  it("Format seconds", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: "07",
      ampm: "PM",
    };
    expect(prependZero("seconds")(timeWithSingles)).toEqual(timeWithDoubles);
  });

  it("Format minutes", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: "08",
      seconds: 7,
      ampm: "PM",
    };
    expect(prependZero("minutes")(timeWithSingles)).toEqual(timeWithDoubles);
  });

  it("Format hours", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: "01",
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };
    expect(prependZero("hours")(timeWithSingles)).toEqual(timeWithDoubles);
  });

  it("Format day", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: 5,
      day: "04",
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };
    expect(prependZero("day")(timeWithSingles)).toEqual(timeWithDoubles);
  });
  it("Format month", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: "05",
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };
    expect(prependZero("month")(timeWithSingles)).toEqual(timeWithDoubles);
  });

  it("doubles all the necessary digits", () => {
    const timeWithSingles = {
      year: 2020,
      month: 5,
      day: 4,
      hours: 1,
      minutes: 8,
      seconds: 7,
      ampm: "PM",
    };

    const timeWithDoubles = {
      year: 2020,
      month: "05",
      day: "04",
      hours: "01",
      minutes: "08",
      seconds: "07",
      ampm: "PM",
    };
    expect(doubleDigits(timeWithSingles)).toEqual(timeWithDoubles);
  });
});
