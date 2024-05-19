import { TiMessage } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">Para</span>
            <span className="text-gray-900 font-bold"> Matheus Carmo</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
const NoChatSelected = () => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col">
        <p>Bem Vindo 👋 Matheus Carmo 🍵</p>
        <p>Selecione uma Conversa para começar a enviar mensagens</p>
        <TiMessage className="text-9xl md:text-6xl text-center self-center mt-2" />
      </div>
    </div>
  );
};
