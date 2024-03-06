import React from "react";
import Searchinput from "./Searchinput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <Searchinput />
      <div className="divider px-2"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
