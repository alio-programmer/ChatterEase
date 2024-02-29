const jwt = require("jsonwebtoken");

const generatetoken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks (cross site attacks)
    sameSite: "strict", //CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

module.exports = { generatetoken };
