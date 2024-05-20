import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation, index) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={index === conversations.length - 1}
        />
      ))}

      {loading && <span className="loading loading-spinner mx-auto" />}
    </div>
  );
}
