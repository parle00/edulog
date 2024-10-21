import { UserStorage } from "@/model/user";
import { USER_STORAGE } from "@/utils/constants";
import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextProps {
  user: UserStorage | null;
  login: (user: UserStorage) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserStorage | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem(USER_STORAGE);
      const parsedUserStorage = JSON.parse(storedUser as string) as UserStorage;
      return parsedUserStorage ? parsedUserStorage : null;
    }
    return null;
  });

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE);
    if (storedUser) {
      setUser(JSON.parse(storedUser) as UserStorage);
    }
  }, []);

  const login = (user: UserStorage) => {
    setUser(user);
    localStorage.setItem(USER_STORAGE, JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
