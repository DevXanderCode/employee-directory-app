const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Employee');

app.use(express.json());

const Employee = mongoose.model('employee');

const mongoUri =
  'mongodb+srv://admin:0123456789@cluster0.mutb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo database');
});

mongoose.connection.on('error', (err) => {
  console.log('Got this error when i tried to connect to the database', err);
});

app.get('/', (req, res) => {
  res.send('Welcome to node js');
});

app.post('/send-data', (req, res) => {
  console.log(req.body);
  res.send('posted');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
