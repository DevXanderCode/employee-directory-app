const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Welcome to node js');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
