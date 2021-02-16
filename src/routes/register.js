const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/user')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/register', function (req, res) {

  console.log(req);
  const user = {
    email:  req.body.email,
    name: req.body.name,
    password: req.body.password
  }
  UserController.register(
     user
  ).then(
    (e) => {
      
        res.send(e);
      
    }
  )
});

module.exports = router;