const router = require('express').Router();
const passport = require('passport');

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    error: true,
    message: 'Login Failed',
  });
});

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);
