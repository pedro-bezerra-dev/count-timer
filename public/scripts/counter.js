/* eslint-disable import/prefer-default-export */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
function counter(eventName, targetDate) {
  if (typeof (targetDate) === 'string') {
    targetDate = targetDate.split(',');
  }

  const main = {
    eventName,
    targetDate,
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
    months: null,
    interval: null,

    secsCamp: document.querySelector('#second-value'),
    minsCamp: document.querySelector('#minute-value'),
    hoursCamp: document.querySelector('#hour-value'),
    daysCamp: document.querySelector('#day-value'),
    monthsCamp: document.querySelector('#month-value'),

    secondsToMinutesAndMinutesToHours(arg) {
      const result = Math.floor(arg / 60);
      const remainder = arg % 60;

      return [result, remainder];
    },

    hoursToDays(hours) {
      const days = Math.floor(hours / 24);
      const remainder = hours % 24;

      return [days, remainder];
    },

    daysToMonths(days) {
      const months = Math.floor(days / 30);
      const remainder = days % 30;

      return [months, remainder];
    },

    findTheRemainingTimeInSeconds(target) {
      const year = target[0];
      const month = target[1];
      const day = target[2];
      const hour = target[3];
      const min = target[4];

      const start = new Date();
      const end = new Date(year, month, day, hour, min);
      const elapsedTime = Math.round((end.getTime() - start.getTime()) / 1000);

      if (elapsedTime < 0) {
        main.secsCamp.innerHTML = '0';
        main.minsCamp.innerHTML = '0';
        main.hoursCamp.innerHTML = '0';
        main.daysCamp.innerHTML = '0';
        main.monthsCamp.innerHTML = '0';

        return undefined;
      }

      return elapsedTime;
    },

    subSeconds() {
      main.secsCamp.innerHTML = main.seconds;
      main.minsCamp.innerHTML = main.minutes;
      main.hoursCamp.innerHTML = main.hours;
      main.daysCamp.innerHTML = main.days;
      main.monthsCamp.innerHTML = main.months;

      if (main.seconds > 0) {
        main.seconds -= 1;
      } else if (main.minutes == 0 && main.hours == 0 && main.days == 0 && main.months == 0) {
        clearInterval(main.interval);
      } else {
        main.seconds = 59;
        main.subMinutes();
      }
    },

    subMinutes() {
      if (main.minutes > 0) {
        main.minutes -= 1;
      } else if (main.hours == 0 && main.days == 0 && main.months == 0) {
        main.minutes = 0;
      } else {
        main.minutes = 59;
        main.subHours();
      }
    },

    subHours() {
      if (main.hours > 0) {
        main.hours -= 1;
      } else if (main.days == 0 && main.months == 0) {
        main.hours = 0;
      } else {
        main.hours = 23;
        main.subDays();
      }
    },

    subDays() {
      if (main.days > 0) {
        main.days -= 1;
      } else if (main.months == 0) {
        main.days = 0;
      } else {
        main.days = 29;
        main.subMonths();
      }
    },

    subMonths() {
      if (main.months > 0) {
        main.months -= 1;
      } else {
        main.months = 0;
      }
    },

    hideMonthsField() {
      const secondsField = document.querySelector('#counter #second-unit');
      const minutesField = document.querySelector('#counter #minute-unit');
      const daysField = document.querySelector('#counter #day-value');
      const monthsField = document.querySelector('#counter #month-unit');

      secondsField.style.display = 'flex';
      minutesField.style.color = 'var(--color-secondary)';
      daysField.style.border = 'none';
      monthsField.style.display = 'none';
    },

    makesItWork() {
      const seconds = main.findTheRemainingTimeInSeconds(main.targetDate);

      if (seconds == undefined) {
        return;
      }

      main.seconds = seconds;
      [main.minutes, main.seconds] = main.secondsToMinutesAndMinutesToHours(main.seconds);
      [main.hours, main.minutes] = main.secondsToMinutesAndMinutesToHours(main.minutes);
      [main.days, main.hours] = main.hoursToDays(main.hours);
      [main.months, main.days] = main.daysToMonths(main.days);

      if (main.months == 0) {
        main.hideMonthsField();
      }

      main.interval = setInterval(() => main.subSeconds(), 1000);
    },
  };

  main.makesItWork();
}

export { counter };
