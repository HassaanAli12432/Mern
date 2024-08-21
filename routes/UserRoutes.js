const express = require('express')
const router = express.Router();
const userController = require("../controlller/UserController");
const UserModels = require('../models/UserModels');

router.post('/create', userController.createUser)
router.get('/items', userController.getUser)
router.get('/oneItem', userController.getOneUser)
router.put('/update',userController.updateUser)
router.delete("/delete",userController.deleteUser)
router.put('/updates',userController.update)

//router.route("post","/user,userController.createUser,
//"get","/login",userCon......)

module.exports = router