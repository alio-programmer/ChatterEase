import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UseGetconversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversation] = useState([]);

  useEffect(() => {
    const getconversation = async () => {
      setloading(true);
      try {
        const res = await axios.get("api/users/");
        if (res.error) {
          throw new Error(res.error);
        }
        const data = await res.data;
        setconversation(data);
      } catch (error) {
        toast.error("There was some error sending the message");
        console.log(error.message);
      } finally {
        setloading(false);
      }
    };

    getconversation();
  }, []);

  return { loading, conversations };
};

export default UseGetconversation;
