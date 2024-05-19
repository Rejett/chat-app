import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      //localStorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
}

export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Por favor preencha todos os campos");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("As senhas não coincidem");
    return false;
  }
  if (password.length < 6) {
    toast.error("A senha deve ter no mínimo 6 caracteres");
    return false;
  }
  if (username.length < 6) {
    toast.error("O username deve ter no mínimo 6 caracteres");
    return false;
  }

  return true;
};
