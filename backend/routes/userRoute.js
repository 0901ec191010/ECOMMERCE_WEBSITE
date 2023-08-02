const express = require('express');
const router = express.Router();
const { registerUser, authUser, getAllUser, Forget, changePassword} = require('../controller/UserController');

router.post('/register',registerUser)
router.post('/login/user',authUser)
router.get('/getalluser',getAllUser)
router.post('/forget',Forget)
router.put('/change/forget/password/:id',changePassword)




module.exports = router;