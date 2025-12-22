//this code is a completely gutted version of https://github.com/imballinst/married.git
const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_DAY_IN_MILLISECONDS = ONE_DAY_IN_SECONDS * 1000;
//25/01/2023 12:45 pm
const WEDDING_DATE = new Date(2023, 1, 25, 12, 45, 0);
const { floor, abs } = Math;
module.exports = {
  calculate
};
function calculate(currentDate = new Date()) {
  let years;
  let months;
  let days;
  let hours;
  let minutes;
  let seconds;
  const weddingMilliSeconds = WEDDING_DATE.getTime();
  const currentMilliSeconds = currentDate.getTime();
  const diff = currentMilliSeconds - weddingMilliSeconds;
  years = currentDate.getFullYear() - WEDDING_DATE.getFullYear();

  const weddingMonth = WEDDING_DATE.getMonth();
  const currentMonth = currentDate.getMonth();

  months = currentMonth - weddingMonth;

  const weddingDateInMonth = WEDDING_DATE.getDate();
  const currentDateInMonth = currentDate.getDate();

  days = currentDateInMonth - weddingDateInMonth;

  const daysRemainder = Math.floor((diff % ONE_DAY_IN_MILLISECONDS) / 1000);

  hours = floor(daysRemainder / ONE_HOUR_IN_SECONDS);

  const hoursRemainder = daysRemainder % ONE_HOUR_IN_SECONDS;

  minutes = floor(hoursRemainder / ONE_MINUTE_IN_SECONDS);

  const minutesRemainder = hoursRemainder % ONE_MINUTE_IN_SECONDS;

  seconds = minutesRemainder % ONE_MINUTE_IN_SECONDS;

  if (currentDateInMonth === weddingDateInMonth) {
    const weddingHours = WEDDING_DATE.getHours();
    const currentHours = currentDate.getHours();

    if (currentHours < weddingHours) {
      days -= 1;
    } else if (currentHours === weddingHours) {
      const weddingMinutes = WEDDING_DATE.getMinutes();
      const currentMinutes = currentDate.getMinutes();

      if (currentMinutes < weddingMinutes) {
        days -= 1;
      } else if (currentMinutes === weddingMinutes) {
        if (currentDate.getSeconds() < WEDDING_DATE.getSeconds()) {
          days -= 1;
        }
      }
    }
  }

  if (days < 0) {
    days += getNumberOfDaysInMonth(currentDate);
    months -= 1;
  }

  if (months < 0) {
    months = 12 + months;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

function render({ years, months, days, hours, minutes, seconds }) {
  const yearsDiv = document.getElementById("years");
  const monthsDiv = document.getElementById("months");
  const daysDiv = document.getElementById("days");
  const hoursDiv = document.getElementById("hours");
  const minutesDiv = document.getElementById("minutes");
  const secondsDiv = document.getElementById("seconds");

  yearsDiv.innerHTML = appendZeros(years);
  monthsDiv.innerHTML = appendZeros(months);
  daysDiv.innerHTML = appendZeros(days);
  hoursDiv.innerHTML = appendZeros(hours);
  minutesDiv.innerHTML = appendZeros(minutes);
  secondsDiv.innerHTML = appendZeros(seconds);
}

function getNumberOfDaysInMonth(date) {
  const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return endOfMonth.getDate();
}

function appendZeros(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return `${number}`;
}
