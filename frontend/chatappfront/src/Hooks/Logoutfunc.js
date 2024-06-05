import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
const useLogout = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    setloading(true);
    try {
      const reso = await axios.post("api/auth/logout", {
        headers: { "content-type": "application/json" },
      });
      const data = reso;
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("logged out successfully");
    } catch (error) {
      toast.error(error);
    } finally {
      setloading(false);
    }
  };
  return { loading, logout };
};
export default useLogout;
