const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

const getSocketReceiverId = (receiverID) => {
  return userSocketMap[receiverID];
};

io.on("connection", (socket) => {
  console.log("A new user has connected: ", socket.id);

  const userid = socket.handshake.query.userId;
  if (userid != "undefined") {
    userSocketMap[userid] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
    delete userSocketMap[userid];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server, getSocketReceiverId };
