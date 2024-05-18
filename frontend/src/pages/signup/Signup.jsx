import GenderCheckBox from "./GenderCheckBox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Cadastre-se
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-100">
              Nome Completo
            </span>
          </label>
          <input
            type="text"
            placeholder="Digite seu Nome Completo"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-100">Usuário</span>
          </label>
          <input
            type="text"
            placeholder="Digite o nome de Usuário"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-100">Senha</span>
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full input input-bordered h-10"
          />
        </div>
        <div>
          <label className="label p-2">
            <span className="text-base label-text text-gray-100">
              Confirme senha
            </span>
          </label>
          <input
            type="password"
            placeholder="Digite Novamente"
            className="w-full input input-bordered h-10"
          />
        </div>
        <GenderCheckBox />
        <a
          href="#"
          className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block"
        >
          Já Possui uma conta?
        </a>
        <div>
          <button className="btn btn-block btn-sm">Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}
