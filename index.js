const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ang'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session);

app.listen('5000', () => {
  console.log('Server is running');
});
