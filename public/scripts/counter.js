// targetDate = [year, months, days, hours, minutes] | contains the date data of the event and comes from the server
const targetDate = [2021,04,09,21,20];

// functions for converting the date to seconds

function secondsToMinutesAndMinutesToHours(arg) {
  const result = Math.floor(arg / 60);
  const remainder = arg % 60;

  return [result, remainder];
}

function hoursToDays(hours) {
  const days = Math.floor(hours / 24);
  const remainder = hours % 24;

  return [days, remainder];
}

function daysToMonths(days) {
  const months = Math.floor(days / 30);
  const remainder = days % 30;

  return [months, remainder];
}

function findTheRemainingTimeInSeconds(target) {
  const year = target[0];
  const month = target[1];
  const day = target[2];
  const hour = target[3];
  const min = target[4];

  const start = new Date();
  const end = new Date(year, month, day, hour, min);
  const elapsedTime = Math.round((end.getTime() - start.getTime())/1000);

  return elapsedTime;
}

// functions that update the page according to the timer

function subSeconds() {
  secsCamp.innerHTML = seconds;
  minsCamp.innerHTML = minutes;
  hoursCamp.innerHTML = hours;
  daysCamp.innerHTML = days;
  monthsCamp.innerHTML = months;

  if(seconds > 0) {
    seconds -= 1;
  } else {
    if(minsCamp.textContent == 0 && hoursCamp.textContent == 0 && daysCamp.textContent == 0 && monthsCamp.textContent == 0) {
      clearInterval(clock);
      alert('Seu evento chegou!');
    } else {
      seconds = 59;
      subMinutes();
    }
  };
};

function subMinutes() {
  if(minutes > 0) {
    minutes -= 1;
  } else {
    if(hoursCamp.textContent == 0 && daysCamp.textContent == 0 && monthsCamp.textContent == 0) {
      minsCamp.innerHTML = 0;
    } else {
      minutes = 59;
      subHours();
    }
  };
}

function subHours() {
  if(hours > 0) {
    hours -= 1;
  } else {
    if(daysCamp.textContent == 0 && monthsCamp.textContent == 0) {
      hoursCamp.innerHTML = 0;
    } else {
      hours = 23;
      subDays();
    }
  };
}

function subDays() {
  if(days > 0) {
    days -= 1;
  } else {
    if(monthsCamp.textContent == 0) {
      daysCamp.innerHTML = 0;
    } else {
      days = 29;
      subMonths();
    }
  };
}

function subMonths() {
  if(months > 0) {
    months -= 1;
  } else {
    monthsCamp.innerHTML = 0;
    return;
  };
  if(months == 0) {
    hideMonthsField();
  }
}

// function to hide the remaining months field if it is empty

function hideMonthsField() {
  const secondsField = document.querySelector('#counter #second-unit');
  const minutesField = document.querySelector('#counter #minute-unit');
  const daysField = document.querySelector('#counter #day-value');
  const monthsField = document.querySelector('#counter #month-unit');

  secondsField.style.display = 'flex';
  minutesField.style.color = 'var(--color-secondary)';
  daysField.style.border = 'none';
  monthsField.style.display = 'none';
}

// declaration of variables

var seconds = findTheRemainingTimeInSeconds(targetDate),
minutes = 0,
hours = 0,
days = 0,
months = 0

var secsCamp = document.querySelector('#second-value'),
minsCamp = document.querySelector('#minute-value'),
hoursCamp = document.querySelector('#hour-value'),
daysCamp = document.querySelector('#day-value'),
monthsCamp = document.querySelector('#month-value')

// working

minutes = secondsToMinutesAndMinutesToHours(seconds)[0];
seconds = secondsToMinutesAndMinutesToHours(seconds)[1];
hours = secondsToMinutesAndMinutesToHours(minutes)[0];
minutes = secondsToMinutesAndMinutesToHours(minutes)[1];
days = hoursToDays(hours)[0];
hours = hoursToDays(hours)[1];
months = daysToMonths(days)[0];
days = daysToMonths(days)[1];

if(months == 0) {
  hideMonthsField();
};

var clock = setInterval(() => subSeconds(), 1000);
