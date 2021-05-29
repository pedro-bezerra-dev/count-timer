function defineMinimumDateLimit() {
  const currentDate = new Date();

  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  const currentFullYear = currentDate.getFullYear();

  if (currentDay < 10) {
    currentDay = `0${currentDay.toString()}`;
  }
  if (currentMonth < 10) {
    currentMonth = `0${currentMonth.toString()}`;
  }

  const minDate = `${currentFullYear}-${currentMonth}-${currentDay}`;
  return minDate;
}

function defineMinimumHourLimit() {
  const currentHour = new Date().getHours();
  const currentMin = new Date().getMinutes();
  const minHour = `${currentHour.toString()}:${(currentMin + 2).toString()}`;

  return minHour;
}

export { defineMinimumDateLimit, defineMinimumHourLimit };
