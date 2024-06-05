const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model.js");
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.json({ error: "Unauthorized - invalid token" }).status(401);
    }

    const user = await User.findById(decoded.userID).select("-password");
    if (!user) {
      return res.json({ error: "user not found" }).status(401);
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute", error);
    res.json({ error: "internal server error" }).status(500);
  }
};

module.exports = protectRoute;
