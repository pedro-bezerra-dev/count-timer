function dataConverter(eventData) {
  const date = eventData.date
  const hour = eventData.hour

  const eventDate = date.replace(/-/g, ',') + ',' + hour.replace(':', ',')
  
  return eventDate
}

module.exports = dataConverter
