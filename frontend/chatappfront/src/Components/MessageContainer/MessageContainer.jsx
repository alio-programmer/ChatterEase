import React from "react";
import Messages from "./Messages";
import Messageinput from "./Messageinput";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className="bg-slate-500 px-4 py-2 mb-2 rounded-lg">
          <span className="label-text">To: </span>
          <span className="text-gray-900 font-bold">John Doe</span>
        </div>

        <Messages />
        <Messageinput />
      </>
    </div>
  );
};

export default MessageContainer;
