const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Employee');

const Employee = mongoose.model('employee');

const mongoUri = '';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connection', () => {
  console.log('Connected to mongo database');
});

mongoose.connection.on('error', (err) => {
  console.log('Got this error when i tried to connect to the database', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to node js');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
