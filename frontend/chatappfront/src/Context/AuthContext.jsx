import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [AuthUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
