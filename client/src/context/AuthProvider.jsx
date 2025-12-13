import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [role, setRole] = useState(null);

  const login = ({ token, role }) => {
    setAccessToken(token);
    setRole(role);
  };

  const logout = () => {
    setAccessToken(null);
    setRole(null);
  };

  const value = {
    accessToken,
    role,
    isAuthenticated: !!accessToken,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
