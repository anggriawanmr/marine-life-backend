import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import cookieSession from 'cookie-session';

const passportSetup = require('./passport.js');
const authRoute = require('./routes/auth.js');

dotenv.config();
const app = express();
app.use(cors());

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ang'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session);

app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use('/auth', authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
