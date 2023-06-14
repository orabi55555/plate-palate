const User = require("../models/UserModel");


exports.getUserById = async (req, res, next) => {
    try {
      userId = req.params.id;
      const user = await User.findById(userId);
      if (!user) {
        return next(new AppError("User not found", 404));
      }
  
      res.status(200).json({
        status: "success",
        data: {
          user: user,
        },
      });
    } catch (err) {
      return next(new AppError(err.message, 404));
    }
  };