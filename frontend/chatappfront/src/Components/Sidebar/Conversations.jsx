import Conversation from "./Conversation";
import UseGetconversation from "../../Hooks/UseGetconversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = UseGetconversation();
  return (
    <div className=" py-2 flex flex-col overflow-auto no-scrollbar">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emojis={getRandomEmoji()}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
