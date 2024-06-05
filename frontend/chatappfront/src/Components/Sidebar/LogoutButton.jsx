import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/Logoutfunc";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto" onClick={logout}>
      <BiLogOut className="w-6 h-6 text-white cursor-pointer"></BiLogOut>
    </div>
  );
};

export default LogoutButton;
