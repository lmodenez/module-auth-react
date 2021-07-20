import { createContext, ReactNode } from 'react';

import { api } from '../services/api';

import { handleSingInError } from '../utils/Toast';

type AuthContextData = {
  handleLogin: (login: string, password: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  async function handleLogin(login: string, password: string) {
    try {
      api
        .post('auth', {
          usuario: login,
          senha: password,
        })
        .then((res) => console.log(res.data))
        .catch(() => handleSingInError());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
