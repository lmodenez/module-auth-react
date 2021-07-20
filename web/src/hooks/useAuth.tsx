import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const { handleLogin } = useContext(AuthContext);

  return { handleLogin };
}
