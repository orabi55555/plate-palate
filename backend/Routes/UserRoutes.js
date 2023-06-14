const passport = require("passport");
const { Router } = require("express");
// const authController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");
const router = Router();

router
  .route("/:id")
  .get( UserController.getUserById)
