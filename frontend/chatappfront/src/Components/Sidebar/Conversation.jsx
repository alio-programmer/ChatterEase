import React from "react";
import profileimg from "../../assets/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../Context/SocketContext";
const Conversation = ({ conversation, emojis }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isselected = selectedConversation?._id === conversation._id;
  const { onlineuser } = useSocketContext();
  const isonline = onlineuser.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isselected ? "bg-sky-500" : ""}
        `}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isonline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilepic || `https://ui-avatars.com/api/`}
              // alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span className="text-xl">{emojis}</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
