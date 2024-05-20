/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Defina um valor padrão para o contexto
const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const storedAuthUser = localStorage.getItem("chat-user");
  const [authUser, setAuthUser] = useState(
    storedAuthUser ? JSON.parse(storedAuthUser) : null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
