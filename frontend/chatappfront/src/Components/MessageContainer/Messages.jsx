import React, { useEffect } from "react";
import Message from "./Message";
import UseGetmessage from "../../Hooks/UseGetmessage";
import { useRef } from "react";
import UseListenMessages from "../../Hooks/UseListenMessages";

const Messages = () => {
  const { messages, loading } = UseGetmessage();
  UseListenMessages();
  const lastmessageref = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastmessageref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto no-scrollbar">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastmessageref}>
            <Message message={message} />
          </div>
        ))}
      {loading && <span className=" loading loading-spinner mx-auto"></span>}
      {!loading && messages.length === 0 && (
        <p className=" text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
