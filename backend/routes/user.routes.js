const express = require("express");
const router = express.Router();
const { getusers } = require("../controller/user.controller");
const protectRoute = require("../middleware/protectRoute");

router.get("/", protectRoute, getusers);

module.exports = router;
