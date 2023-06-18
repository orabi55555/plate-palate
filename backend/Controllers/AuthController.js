const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);





const authController = {};




authController.register = async (req, res, next) => {
  try {
    const { user_name, email, password, gender, mobile, address, role, otp } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      user_name,
      email,
      role,
      address,
      mobile,
      password: hashedPassword,
      gender,
      otp
      
    });

    const savedUser = await newUser.save();

    const accessToken = jwt.sign({ userId: savedUser._id }, process.env.ACCESS_TOKEN_SECRET);

    res.status(201).json({ message: 'User created successfully', accessToken });
  } catch (err) {
    next(err);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log (user);

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate access token
    const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
    console.log (accessToken);
    

    res.status(200).json({ message: 'Logged in successfully', accessToken,user });
  } catch (err) {
    next(err);
  }
};



authController.logout = async (req, res, next) => {
    try {
      // Get the authorization token from the request header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token is missing or invalid' });
      }
  
      // Extract the token from the header
      const token = authHeader.split(' ')[1];
  
      // Verify the token and get the user ID
      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const userId = decodedToken.userId;
  
      // TODO: Implement logout logic here, such as invalidating the token or deleting it from the client-side
  
      res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
      next(err);
    }
  };

  // Reset user password
  authController.resetPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
      const resetToken = crypto.randomBytes(20).toString('hex');
      const user = await User.findOneAndUpdate(
        { email },
        {
          $set: {
            resetPasswordToken: resetToken,
            resetPasswordExpires: Date.now() + 3600000, // 1 hour
          },
        },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Send password reset email
      const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: "ea960b907704cb",
          pass: "92e3956b7ddeb9"
        }
      });
      const mailOptions = {
        from: 'platepalate.website@gmail.com',
        to: user.email,
        subject: 'Password Reset Request',
        text: `You are receiving this email because you (or someone else) has requested a password reset for your account. Please click on the following link, or paste this into your browser to complete the process: \n\nhttp://${req.headers.host}/reset-password/${resetToken}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (err) {
      next(err);
    }
  };  
  // Change user password
  authController.changePassword = async (req, res, next) => {
    try {
      
      const { resetToken, password } = req.body;
      
      const user = await User.findOne({ resetPasswordToken: resetToken, resetPasswordExpires: { $gt: Date.now() + 3600000 } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired reset token' });
      }
      user.password = password;
      
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000;
      await user.save();
      res.status(200).json({ message: 'Password changed successfully' });
    } catch (err) {
      next(err);
    }
  };
  





module.exports = authController;