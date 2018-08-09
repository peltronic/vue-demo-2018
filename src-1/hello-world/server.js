/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const VIDEO_DATA_FILE = path.join(__dirname, 'db/videos-data.json');
const TOUR_DATA_FILE = path.join(__dirname, 'db/tours-data.json');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// eg: http://localhost:3000/img/tour-justin_bieber.png

var publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/videos', (req, res) => {
  fs.readFile(VIDEO_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/tours', (req, res) => {
  fs.readFile(TOUR_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    //res.json( JSON.parse(data) );
    res.json( JSON.parse(data).slice(0,3) );
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
