// const passport = require("passport");
// const { Router } = require("express");
// // const authController = require("../Controllers/AuthController");
// const router = Router();

// router
//   .route("/:id")
//   .get( UserController.getUserById)
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController');

router.get('/user/:id', userController.getUserById);


module.exports = router;
