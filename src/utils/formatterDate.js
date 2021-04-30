function formaterDate(date) {
  date = date.substring(0, 10)
  const data = date.split(',')
  let formatedDate = `${data[2] + '/' + data[1] + '/' + data[0]}`

  return formatedDate
}

module.exports = formaterDate
