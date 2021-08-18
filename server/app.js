const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
