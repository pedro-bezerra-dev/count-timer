const path = require('path')
const fakedata = require(path.join(__dirname, 'database', 'fakedata.js'));
const dataJoin = require(path.join(__dirname, 'utils', 'manipulatingData.js'));
const { addEvent, searchEvent , deleteEvent , getAllEvents } = require(path.join(__dirname, 'database', 'functions.js'));
const { counter } = require(path.join(__dirname, 'utils', 'counterHidden.js'))

const routes = {
  index(req, res) {
    const allEvents = getAllEvents()

    res.render('index.html');
  },

  pageCreateEvent(req, res) {
    const allEvents = getAllEvents()

    res.render('page-create-event.html');
  },

  createEvent(req, res) {
    const eventData = req.body;
    const eventName = eventData.name;
    const eventDate = dataJoin(eventData);

    addEvent(eventName, eventDate)
    counter(eventName, eventDate)

    res.redirect('/sucess');
  },

  pageEvent(req, res) {
    const eventID = req.query.id;
    const [ event ] = searchEvent(eventID)
    const allEvents = getAllEvents()

    res.render('page-event.html');
  },

  pageEvents(req, res) {
    const allEvents = getAllEvents()

    res.render('page-events.html');
  },

  pageSucess(req, res) {
    res.render('page-sucess.html');
  },

  deleteEvent(req, res) {
    const eventID = req.query.id;
    deleteEvent(eventID)

    res.redirect('/events');
  },

  pageUpdate(req, res) {
    const { id, eventName, eventDate } = req.query

    res.render('page-create-event.html');
  },

  pageTest(req, res) {
    res.render('test.html', { fakedata });
  },
};

module.exports = routes;
