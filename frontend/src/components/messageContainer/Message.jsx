export default function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=Gabi"
            alt="Foto do Usuário"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Olá! Como você está?
      </div>
      <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
        14:34
      </div>
    </div>
  );
}
