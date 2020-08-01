const express = require('express');
const router = express.Router();
const controllers = require('../controllers/')

// router.get('/users', function (req, res, next) {
//   controllers.users.showUsers(req,res);
// })

router.get('/', (req, res) => {
  res.render('top');
});

router.get('/items', (req, res) => {
  controllers.items.showItems(req,res);
})

module.exports = router;
