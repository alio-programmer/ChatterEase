import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [onlineuser, setonlineuser] = useState([]);
  const { AuthUser } = useAuthContext();

  useEffect(() => {
    if (AuthUser) {
      const socket = io(
        {
          query: {
            userId: AuthUser._id,
          },
        },
        {
          transports: ["websocket"],
        }
      );
      setsocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setonlineuser(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [AuthUser]);

  console.log("Online Users:", setonlineuser);
  return (
    <SocketContext.Provider value={{ socket, onlineuser }}>
      {children}
    </SocketContext.Provider>
  );
};
