function dataJoin(eventData) {
  let date = eventData.date.split('-');

  let month = Number(date[1]);
  month -= 1;
  month = `0${String(month)}`;

  date.splice(1, 1, month);
  date = date.join(',');

  const hour = eventData.hour.replace(':', ',');

  const eventDate = `${date},${hour}`;

  return eventDate;
}

function dataPart(data) {
  let date = data.subString(0, 10)
  date = date.replace(/-/g, '-')

  let hour = data.subString(11)
  hour = hour.replace(',', ':')

  return { date, hour }
}

module.exports = { dataJoin, dataPart};
