import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import UseSendmessage from "../../Hooks/UseSendmessage";

const Messageinput = () => {
  const [message, setmessage] = useState("");
  const { sendmessage, loading } = UseSendmessage();
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendmessage(message);
    setmessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handlesubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border textsm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        ></input>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className=" loading loading-spinner mx-auto"></span>
          ) : (
            <IoIosSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
