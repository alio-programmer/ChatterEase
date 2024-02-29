const { sendMessage, getMessage } = require("../controller/message.controller");
const protectRoute = require("../middleware/protectRoute");

const router = require("express").Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;
