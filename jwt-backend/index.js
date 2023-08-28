const express = require('express');
const bodyParser = require('body-parser');
const {HttpError} = require('./model/errors');

const bookRoutes = require('./routes/book');
const authRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PATCH,DELETE');

  next();
});

app.use('/api', authRoutes);

app.use('/api/books', bookRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Page not found!', 404);
  throw error;
});


app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || 'Unknown error!' });
});

app.listen(4000);
