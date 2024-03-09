import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
const useSignup = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState("");
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
      const res = await axios
        .post(
          "http://localhost:8000/api/auth/signup",
          {
            fullname,
            username,
            email,
            password,
            confirmpassword,
            gender,
          },
          { header: { "Content-type": "application/json" } }
        )
        .then((res) => {
          console.log(res);
        });
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
