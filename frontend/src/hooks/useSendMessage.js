import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import sendSound from "../assets/send.mp3";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    const success = handleInputErrors({ message });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const sound = new Audio(sendSound);
      sound.play();
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendMessage;

const handleInputErrors = ({ message }) => {
  if (!message) {
    toast.error("Por favor escreva algo!");
    return false;
  }

  return true;
};
