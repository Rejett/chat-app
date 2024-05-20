import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

export default function Messages() {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((item) => <MessageSkeleton key={item} />)}
      {!loading && messages.length === 0 ? (
        <p>Envie uma mensagem para começar uma conversa!</p>
      ) : (
        messages?.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );
        })
      )}
    </div>
  );
}
