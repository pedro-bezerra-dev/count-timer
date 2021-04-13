function defineMinimumDateLimit() {
  const currentDate = new Date;

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentFullYear = currentDate.getFullYear();

  if(currentDay < 10) {
    currentDay = '0' + currentDay.toString();
  }
  if(currentMonth < 10) {
    currentMonth = '0' + currentMonth.toString();
  }
  
  const minDate = currentFullYear + '-' + currentMonth + '-' + currentDay;
  const dateInput = document.querySelector('#event-date');
  dateInput.min = minDate;
}

function defineMinimumHourLimit() {
  const currentHour = new Date().getHours();
  const minHour = (currentHour + 1).toString() + ':00';

  const hourInput = document.querySelector('#event-hour');
  hourInput.min = minHour;

  setTimeout(() => {
    if(hourInput.value < minHour) {
      alert('Please choose a time later than that.')
    }
  },2000)
}

defineMinimumDateLimit();
defineMinimumHourLimit();