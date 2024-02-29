const { User } = require("../models/user.model");

const getusers = async (req, res) => {
  try {
    const loggedInuserId = req.user._id;
    console.log("logged in user:", req.user.username);
    const filtereduser = await User.find({
      _id: { $ne: loggedInuserId },
    }).select("-password");

    return res.status(200).json(filtereduser);
  } catch (error) {
    console.log("Error in user controller", error);
    res.status(400).json({ error: "internal server error" });
  }
};

module.exports = { getusers };
