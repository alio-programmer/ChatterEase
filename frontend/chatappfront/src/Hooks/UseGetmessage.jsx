import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";

const UseGetmessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getmessage = async () => {
      setloading(true);
      try {
        const res = await axios.get(
          `/api/messages/${selectedConversation._id}`
        );
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };
    if (selectedConversation?._id) getmessage();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
};

export default UseGetmessage;
