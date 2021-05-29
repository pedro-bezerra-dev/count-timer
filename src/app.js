/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
function startServer() {
  // server
  const express = require('express');
  const nunjucks = require('nunjucks');
  const path = require('path');

  const app = express();
  const port = 7676;
  const routes = require(path.join(__dirname, 'routes.js'));

  // configuring template engine
  nunjucks.configure(path.join(__dirname, 'view'), {
    autoescape: true,
    express: app,
  });

  // static files
  app.use(express.static(path.join(__dirname, '../', 'public')));

  // allowing encrypted requests
  app.use(express.urlencoded({ extended: true }));

  // routes
  app.get('/', routes.index);
  app.get('/create-event', routes.pageCreateEvent);
  app.post('/create-event', routes.createEvent);
  app.get('/event', routes.pageEvent);
  app.get('/events', routes.pageEvents);
  app.get('/sucess', routes.pageSucess);
  app.get('/delete', routes.deleteEvent);
  app.get('/update', routes.pageUpdate);
  app.post('/update', routes.updateEvent);
  app.get('/test', routes.pageTest);

  app.listen(port);
}

module.exports = startServer;
