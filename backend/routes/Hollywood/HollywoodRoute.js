const express = require('express');
const router = express.Router();
const { MovieName, searchByid, DeleteByid, MovieUpdate, Hollywood } = require('../../controller/HollywoodController');



router.post('/name/movie',MovieName)
router.get('/search/:mid',searchByid)
router.delete('/delete/data/:did',DeleteByid)
router.put('/update/:uid',MovieUpdate)
router.get('/data/hollywood',Hollywood)


module.exports = router;