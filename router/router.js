const router = require('express').Router();
const {homepage} = require('../controller/userController');

router.get('/homepage', homepage)


module.exports = router