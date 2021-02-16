const express = require('express');
const authMiddleware = require('../app/middlewares/auth')
const router = express.Router();

router.use(authMiddleware);

router.get('/', function(req, res) {
  res.send('Birds home page');
});

router.get('/about', function(req, res) {
  res.send('About birds');
});
