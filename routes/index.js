const express = require('express');
const router = express.Router();
const controllers = require('../controllers/')

// router.get('/', function (req, res, next) {
//   controllers.showIndexPage(req,res);
// })

router.get('/users', function (req, res, next) {
  controllers.users.showUsers(req,res);
})

router.get('/', (req, res) => {
  res.render('top');
});

router.get('/index', (req, res) => {
  res.render('index.ejs');
});

module.exports = router;
