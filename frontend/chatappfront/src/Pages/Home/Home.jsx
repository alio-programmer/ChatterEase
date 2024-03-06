import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex min-w-10 child:p-3 sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
