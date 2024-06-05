const { User } = require("../models/user.model");

const getusers = async (req, res) => {
  try {
    const loggedInuserId = req.user._id;
    const filtereduser = await User.find({
      _id: { $ne: loggedInuserId },
    }).select("-password");

    return res.json(filtereduser).status(200);
  } catch (error) {
    console.log("Error in user controller", error);
    res.json({ error: "internal server error in getuser" }).status(500);
  }
};

module.exports = { getusers };
