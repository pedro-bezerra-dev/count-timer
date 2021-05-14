const path = require('path')
const fakedata = require(path.join(__dirname, 'database', 'fakedata.js'));
const dataConverter = require(path.join(__dirname, 'utils', 'manipulatingData.js'));
const createEvent = require(path.join(__dirname, 'database', 'createEvent.js'));
const database = require(path.join(__dirname, 'database', 'dbInit.js'));

const routes = {
  index(req, res) {
    database.then((db) => {
      db.all('SELECT * FROM events').then((allEvents) => {
        res.render('index.html', { allEvents });
      })
    }).catch((error) => {
      res.send(`
      Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
      The error is: ${error}
      `)
    })
  },

  pageCreateEvent(req, res) {
    database.then((db) => {
      db.all('SELECT * FROM events').then((allEvents) => {
        res.render('page-create-event.html', { allEvents });
      })
    }).catch((error) => {
      res.send(`
      Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
      The error is: ${error}
      `)
    })
  },

  createEvent(req, res) {
    const eventData = req.body;
    const eventName = eventData.name;
    const eventDate = dataConverter(eventData);

    database.then((db) => {
      createEvent(db, eventName, eventDate).then(() => {
        res.redirect('/sucess');
      })
    }).catch((error) => {
      res.send(`
        Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
        The error is: ${error}
      `)
    })
  },

  pageEvent(req, res) {
    const eventID = req.query.id;
    database.then((db) => {
      db.all(`SELECT * FROM events WHERE id=${eventID}`).then(([ event ]) => {
        db.all('SELECT * FROM events').then((allEvents) => {
          res.render('page-event.html', { event, allEvents });
        })
      })
    }).catch((error) => {
      res.send(`
        Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
        The error is: ${error}
      `)
    });
  },

  pageEvents(req, res) {
    database.then((db) => {
      db.all('SELECT * FROM events').then((allEvents) => {
        res.render('page-events.html', { events: allEvents, allEvents });
      })
    }).catch((error) => {
      res.send(`
      Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
      The error is: ${error}
      `)
    })
  },

  pageSucess(req, res) {
    res.render('page-sucess.html');
  },

  deleteEvent(req, res) {
    const eventID = req.query.id;
    database.then((db) => {
      db.all(`DELETE FROM events WHERE id=${eventID}`).then(() => {
        res.redirect('/events');
      })
    }).catch((error) => {
      res.send(`
      Oops! It looks like an error has occurred. Please try restarting the app. If that doesn't work please could you report the error to us on our page: https://github.com/pedro-henrique-sb/count-timer/issues
      
      The error is: ${error}
      `)
    })
  },

  pageTest(req, res) {
    res.render('test.html', { fakedata });
  },
};

module.exports = routes;
