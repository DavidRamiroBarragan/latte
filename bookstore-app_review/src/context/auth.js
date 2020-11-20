import {createContext, useState} from 'react';
import localstorageUtils from 'services/localStorageUtils';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [authTokens, setAuthTokens] = useState(localstorageUtils.getItem('auth'));

  const isAuthenticated = Boolean(authTokens);

  function login(data) {
    localstorageUtils.setItem('auth', data);
    setAuthTokens(data);
  }

  function logout() {
    localstorageUtils.removeItem('auth');
    setAuthTokens(null);
  }

  return (
    <AuthContext.Provider value={{login, isAuthenticated, logout}}>{children}</AuthContext.Provider>
  );
}
