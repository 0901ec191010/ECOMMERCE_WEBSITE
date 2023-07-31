const express = require('express');
const router = express.Router();
const { registerUser, authUser, getAllUser, Forget, changePassword} = require('../controller/UserController');
const { MovieName, searchByid, DeleteByid, MovieUpdate, AllShow } = require('../controller/MovieController');


router.post('/register',registerUser)
router.post('/login/user',authUser)
router.get('/getalluser',getAllUser)
router.post('/forget',Forget)
router.put('/change/forget/password/:id',changePassword)

// <----------------------movies routes-------------------------->

router.post('/name/movie',MovieName)
router.get('/search/:mid',searchByid)
router.delete('/delete/data/:did',DeleteByid)
router.put('/update/:uid',MovieUpdate)
router.get('/data/get',AllShow)





module.exports = router;