import React, { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext";
import useConversation from "../zustand/useConversation";

const UseListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default UseListenMessages;
