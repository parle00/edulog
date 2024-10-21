import { USER_STORAGE } from "@/utils/constants";
import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextProps {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem(USER_STORAGE);
      return storedUser ? storedUser : null;
    }
    return null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username: string) => {
    setUser(username);
    localStorage.setItem(USER_STORAGE, username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
