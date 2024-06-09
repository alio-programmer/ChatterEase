import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extracttime";

const Message = ({ message }) => {
  const { AuthUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromme = message.senderId === AuthUser._id;
  const formattedtime = extractTime(message.createdAt);
  const chatclassname = fromme ? "chat-end" : "chat-start";
  const profilepic = fromme
    ? AuthUser.profilepic
    : selectedConversation?.profilepic;
  const bubbleBgcolor = fromme ? "bg-blue-500" : "";
  return (
    <div className={`chat ${chatclassname}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilepic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgcolor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedtime}
      </div>
    </div>
  );
};

export default Message;
