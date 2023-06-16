const User = require("../Models/UserModel");

exports.getUserById = function(req, res) {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};
