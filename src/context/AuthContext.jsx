import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const tokenSalvo = Cookies.get("token");
    if (tokenSalvo) {
      setUsuario({ token: tokenSalvo });
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 1 });
    setUsuario({ token });
  };

  const logout = () => {
    Cookies.remove("token");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
