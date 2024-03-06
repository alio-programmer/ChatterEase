import React from "react";
import { IoIosSend } from "react-icons/io";

const Messageinput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border textsm rounded-lg block w-full p-3 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        ></input>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <IoIosSend />
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
