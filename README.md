# CLOCK

Composing functions in JS.

## Description

The clock needs to display hours, minutes, seconds, and time of day in civilian time. Each field must always have double digits, meaning leading zeros need to be applied to single-digit values like 1 or 2. The clock must also tick and change the display every second.

## Functions

Value functions (self explanatory):

- _oneSecond_: 1000 ms
- _getCurrentTime_: get curren time
- _clear_: clear console
- _log_: writes message on the console

Data transformation functions:

- _serializeClockTime_: Takes a date object and returns an object for clock time that contains hours, minutes, and seconds.
- _civilianHours_: Takes the clock time object and returns an object where hours are converted to civilian time. For example: 1300 becomes 1:00.
- _appendAMPM_: Takes the clock time object and appends time of day (AM or PM) to that object.

Higher-order functions:

- _display_: Takes a target function and returns a function that will send a time to the target. In this example, the target will be console.log.
- _formatClock_: Takes a template string and uses it to return clock time formatted based on the criteria from the string. In this example, the template is “hh:mm:ss tt”. From there, formatClock will replace the placeholders with hours, minutes, seconds, and time of day.
- _prependZero_: Takes an object’s key as an argument and prepends a zero to the value stored under that object’s key. It takes in a key to a specific field and prepends values with a zero if the value is less than 10.

## Installation

This system uses NODEJS and one node package manager. YARN is recommended.
As a preparation for the installation of this system:

1. Install nodejs (https://nodejs.org/en/download/)
2. Install yarn (https://classic.yarnpkg.com/en/docs/install/#debian-stable)

```
$ yarn   # Install all dependencies
```

## Running

```
$ yarn clock                        # run
```
