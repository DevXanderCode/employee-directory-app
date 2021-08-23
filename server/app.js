const express = require('express'),
  app = express(),
  mongoose = require('mongoose');
require('./Employee');

app.use(express.json());

const Employee = mongoose.model('employee'),
  mongoUri =
    'mongodb+srv://admin:0123456789@cluster0.mutb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo database');
});

mongoose.connection.on('error', (err) => {
  console.log('Got this error when i tried to connect to the database', err);
});

app.get('/', (req, res) => {
  Employee.find({})
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});

app.post('/send-data', (req, res) => {
  const { name, email, phone, picture, salary, position } = req.body;
  // console.log(req.body);
  const employee = new Employee({
    name,
    email,
    phone,
    picture,
    salary,
    position,
  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.status(201);
      res.send(data);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
      console.log(err);
    });
});

app.post('/delete', (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      // res.status(204);
      res.send(data);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
      console.log(err);
    });
});

app.post('/update', (req, res) => {
  const { name, email, phone, picture, salary, position } = req.body;
  Employee.findByIdAndUpdate(req.body.id, {
    name,
    email,
    phone,
    picture,
    salary,
    position,
  })
    .then((data) => {
      console.log('successfully updated', data);
      // res.send('successfully updated');
      res.send(data);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
      console.log(err);
    });
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
