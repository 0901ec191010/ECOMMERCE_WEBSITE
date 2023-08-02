const express = require('express');
const router = express.Router();
const { MovieBollywood, Bollywood } = require('../../controller/Bollywood');



router.post('/movie/create',MovieBollywood)
router.get('/get/data',Bollywood)


module.exports = router
