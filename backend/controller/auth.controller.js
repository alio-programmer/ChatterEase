const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const { generatetoken } = require("../utils/generatetoken");

const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmpassword, gender } =
      req.body;

    if (password !== confirmpassword) {
      return res.json({ error: "Passwords do not match" }).status(400);
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ error: "Username already exists" }).status(400);
    }

    //HASH password here
    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(password, salt);
    //https://avatar.iran.liara.run/public/boy

    const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullname,
      username,
      email,
      password: hashedpassword,
      gender,
      profilepic: gender === "male" ? boyProfilepic : girlProfilepic,
    });
    if (newuser) {
      generatetoken(newuser._id, res);
      await newuser.save();

      res
        .json({
          _id: newuser._id,
          fullName: newuser.fullname,
          email: newuser.email,
          userName: newuser.username,
          profilepic: newuser.profilepic,
        })
        .status(201);
    } else {
      res.json({ error: "Invalid user data" }).status(400);
    }
  } catch (error) {
    return res.json({ error: "Internal Server Error", error }).status(500);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordtrue = await bcryptjs.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordtrue) {
      return res.json({ error: "invalid username or password" }).status(401);
    }

    generatetoken(user._id, res); //generating token

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      profilepic: user.profilepic,
    });
  } catch (error) {
    return res.json({ error: "Internal Server Error", error }).status(500);
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.json({ message: "Logged out successfully" }).status(200);
  } catch (error) {
    return res.json({ error: "Internal Server Error", error }).status(500);
  }
};

module.exports = { signup, login, logout };
