import { TiMessage } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/auth.context";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">Para</span>
            <span className="text-gray-900 font-bold">
              {" "}
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col">
        <p>Bem Vindo(a) 👋 {authUser.username} 🍵!</p>
        <p>Selecione uma Conversa para começar a enviar mensagens</p>
        <TiMessage className="text-9xl md:text-6xl text-center self-center mt-2" />
      </div>
    </div>
  );
};
