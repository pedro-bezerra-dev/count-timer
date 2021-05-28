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
  let apartedDate = data.substring(0, 10)
  apartedDate = apartedDate.replace(/,/g, '-')

  let hour = data.substring(11)
  hour = hour.replace(',', ':')

  return { apartedDate, hour }
}

module.exports = { dataJoin, dataPart};
