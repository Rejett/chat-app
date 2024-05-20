/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/auth.context";
import { formatTime } from "../../utils/formatTime";
import useConversation from "../../zustand/useConversation";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = authUser && message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation
    ? selectedConversation.profilePic
    : "";

  const bgMessageColor = fromMe ? "bg-blue-500" : "bg-gray-800";

  const shakeClass = message.shouldShake && "shake";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Foto do Usuário" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgMessageColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
        {formatTime(message.createdAt)}
      </div>
    </div>
  );
}
