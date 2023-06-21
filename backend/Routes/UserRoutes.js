const passport = require("passport");
const { Router } = require("express");
const bodyParser = require("body-parser");
const authController = require("../Controllers/AuthController");
const userController = require("../Controllers/UserController");
const express = require("express");
const router = express.Router();

const app = express();


// Middleware
app.use(bodyParser.json());



// Google Signup route
// router.post('/auth/google/signup', authController.googleSignup);

// Google Login route
// router.post('/auth/google/login', authController.googleLogin);



// authRoutes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/reset-password', authController.resetPassword);
// Reset user password
// router.post('/reset-password', authController.resetPassword);

// Change user password
router.post('/reset-password/:resetToken', authController.changePassword);


//userRoutes
router.get('/getallusers', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);
// Route to display all users for dashboard
router.get('/users/getall', userController.getUsers);




// const passport = require("passport");
// const { Router } = require("express");
// // const authController = require("../Controllers/AuthController");
// const router = Router();

// router
//   .route("/:id")
//   .get( UserController.getUserById)

router.get('/:id', userController.getUserById);


module.exports = router;
