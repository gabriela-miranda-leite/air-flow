import { ReactNode, createContext, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {}

const AuthContext = createContext({} as AuthContextProps);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useModal must be used within a AuthContextProvider");
  }

  return context;
};

export { AuthContextProvider, useAuthContext };
