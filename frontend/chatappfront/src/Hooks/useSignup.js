import toast from "react-hot-toast";
import axios from "axios";
import { useContext, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
const useSignup = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    email,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      email,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;
    setloading(true);
    try {
      const res = await axios.post(
        "api/auth/signup",
        {
          fullname,
          username,
          email,
          password,
          confirmpassword,
          gender,
        },
        {
          headers: {
            "Content-type": "application/json",
            "Data-name": "Signupdata",
          },
        }
      );
      const data = res.data;
      if (data.error) {
        throw new Error(data.error);
      }
      //set user data in local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputError = ({
  fullname,
  username,
  email,
  password,
  confirmpassword,
  gender,
}) => {
  if (
    !fullname ||
    !username ||
    !password ||
    !email ||
    !confirmpassword ||
    !gender
  ) {
    toast.error("Please fill in all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("password and confirmpassword do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be atleast 6 characters");
    return false;
  }
  return true;
};
