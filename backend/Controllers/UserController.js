const User = require('../Models/UserModel');


const userController = {};


userController.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};


userController.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// userController.updateUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { user_name, email, password, otp, userImage, gender, role, mobile, address } = req.body;

//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     user.user_name = user_name || user.name;
//     user.email = email || user.email;
//     user.password = password || user.password;
//     user.otp = otp || user.otp;
//     user.userImage = userImage || user.userImage;
//     user.gender = gender || user.gender;
//     user.role = role || user.role;
//     user.mobile = mobile || user.mobile;
//     user.address = address || user.address;

//     const updatedUser = await user.save();

//     res.status(200).json({ message: 'User updated successfully', user: updatedUser });
//   } catch (err) {
//     next(err);
//   }
// };

userController.deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find user by ID and delete
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (err) {
    next(err);
  }
};



//update
userController.updateUserById = async (req, res) => {
  console.log(req.body);
  try {
    const { user_name, email, user_image, mobile } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { user_name, email, user_image, mobile },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'user item not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  res.status(200).json({ message: 'User updated successfully' });
};

// userController.updateUserById  = async (req, res) => {

//   const { id } = req.params;
//   const user = await User.findById(id);

//   if(req.file)
//   {
//     req.body.img=req.file.filename
//   }

//   let name = req.body.user_name;
//   let email = req.body.email;
//   // let password = req.body.password;
//   let image = req.body.image;
//   let gender = req.body.gender;
//   let mobile = req.body.mobile;
//   // let address = req.body.address;

//   if (!user) {
//     res.status(404).json({ message: "User not found" });
//   } else {
//     user.name = name ? name : user.name;
//     user.email = email?  email : user.email;
//     user.image = image? image: user.image;
//     user.gender = gender ? gender : user.gender ;
//     user.mobile = mobile ? mobile: user.mobile;
//     // user.address = address ? address : user.address ;
//     await user.save();
//     res
//     // .status(StatusCodes.OK)
//     .json(user);
//   }
// };



module.exports = userController;