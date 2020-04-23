const User = require("../models/user");

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error,
      });
    }

    user.salt = undefined;
    user.hashed_password = undefined;

    req.profile = user;
    next();
  });
};
