const { User } = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const { generatetoken } = require("../utils/generatetoken");

const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmpassword, gender } =
      req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
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

      res.status(201).json({
        _id: newuser._id,
        fullName: newuser.fullname,
        email: newuser.email,
        userName: newuser.username,
        profilepic: newuser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
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
      return res.status(400).json({ message: "invalid username or password" });
    }
    generatetoken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      profilepic: user.profilepic,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { signup, login, logout };
