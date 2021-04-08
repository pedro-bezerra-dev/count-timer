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

// targetDate = [year, months, days, hours, minutes] | contains the date data of the event
const targetDate = [2021,03,12,15,20];

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

var seconds = findTheRemainingTimeInSeconds(targetDate),
minutes = 0,
hours = 0,
days = 0,
months = 0

minutes = secondsToMinutesAndMinutesToHours(seconds)[0];
seconds = secondsToMinutesAndMinutesToHours(seconds)[1];
hours = secondsToMinutesAndMinutesToHours(minutes)[0];
minutes = secondsToMinutesAndMinutesToHours(minutes)[1];
days = hoursToDays(hours)[0];
hours = hoursToDays(hours)[1];
months = daysToMonths(days)[0];
days = daysToMonths(days)[1];

if(months == 0) {
  document.querySelector('#counter #second-unit').style.display = 'flex';
  document.querySelector('#counter #minute-unit').style.color = 'var(--color-secondary)';
  document.querySelector('#counter #day-value').style.border = 'none';
  document.querySelector('#counter #month-unit').style.display = 'none';
};

console.log('s = ' + seconds);
console.log('m = ' + minutes);
console.log('h = ' + hours);
console.log('d = ' + days);
console.log('mt = ' + months);

var secsCamp = document.querySelector('#second-value'),
minsCamp = document.querySelector('#minute-value'),
hoursCamp = document.querySelector('#hour-value'),
daysCamp = document.querySelector('#day-value'),
monthsCamp = document.querySelector('#month-value')

function subSeconds() {
  secsCamp.innerHTML = seconds;
  minsCamp.innerHTML = minutes;
  hoursCamp.innerHTML = hours;
  daysCamp.innerHTML = days;

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

var clock = setInterval(() => subSeconds(), 1000);

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
}
