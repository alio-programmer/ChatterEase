import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useLogin = () => {
  const [loading, setloading] = useState(false);

  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const loginerror = handleloginerror({ username, password });
    if (!loginerror) return;
    setloading(true);
    try {
      const res = await axios.post("api/auth/login", { username, password });
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

const handleloginerror = ({ username, password }) => {
  if (!username) {
    toast.error("Please enter username");
    return false;
  }
  if (!password) {
    toast.error("Please enter password");
    return false;
  }
  if (password.length < 6) {
    toast.error("minimum password length is 6");
    return false;
  }
  return true;
};
