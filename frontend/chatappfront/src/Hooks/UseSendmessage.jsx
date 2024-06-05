import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const UseSendmessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendmessage = async (message) => {
    setloading(true);
    try {
      const res = axios.post(
        `/api/messages/send/${selectedConversation._id}`,
        JSON.stringify({ message }),
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.error) {
        throw new Error(res.error);
      }
      const data = await res.data;
      setMessages([...messages, data]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  return { sendmessage, loading };
};

export default UseSendmessage;
