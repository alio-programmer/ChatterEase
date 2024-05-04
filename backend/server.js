const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const { connectToMongodb } = require("./db/connectToMongodb");

const app = express();
app.use(cors());
app.use(express.json()); //to parse the incoming request with json payloads (from req.body)
dotenv.config();
app.use(cookieParser());
const PORT = process.env.PORT || 8080;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
  connectToMongodb();
});

app.use("/", (req, res, next) => {
  res.json("server is fine");
});
