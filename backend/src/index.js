const express = require('express')
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const { connectDB } = require('./db');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()
const loginRoute = require('./auth');
const usersRoute = require('./routes/users');

app.use('/', loginRoute);
app.use(express.static('build-frontend'));

app.use('/users', passport.authenticate('jwt', { session: false }), usersRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})