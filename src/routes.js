const path = require('path')
const fakedata = require(path.join(__dirname, 'database', 'fakedata.js'));
const dataConverter = require(path.join(__dirname, 'utils', 'manipulatingData.js'));
const { addEvent, searchEvent , deleteEvent , getAllEvents } = require(path.join(__dirname, 'database', 'functions.js'));
const { counter } = require(path.join(__dirname, 'utils', 'counterHidden.js'))

const routes = {
  index(req, res) {
    const allEvents = getAllEvents()

    res.render('index.html', { allEvents });
  },

  pageCreateEvent(req, res) {
    const allEvents = getAllEvents()

    res.render('page-create-event.html', { allEvents });
  },

  createEvent(req, res) {
    const eventData = req.body;
    const eventName = eventData.name;
    const eventDate = dataConverter(eventData);

    addEvent(eventName, eventDate)
    counter(eventName, eventDate)

    res.redirect('/sucess');
  },

  pageEvent(req, res) {
    const eventID = req.query.id;
    const [ event ] = searchEvent(eventID)
    const allEvents = getAllEvents()

    res.render('page-event.html', { event, allEvents });
  },

  pageEvents(req, res) {
    const allEvents = getAllEvents()

    res.render('page-events.html', { events: allEvents, allEvents });
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
    res.render('page-create-event.html', { allEvents });
  },

  pageTest(req, res) {
    res.render('test.html', { fakedata });
  },
};

module.exports = routes;
