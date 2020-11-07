import {AuthContext} from 'context/auth';
import useAuth from 'hooks/useAuth';

export default function AuthProvider({children}) {
  const {authTokens, exitstingToken, setTokens, isAuthenticated} = useAuth();
  return (
    <AuthContext.Provider value={{authTokens, exitstingToken, setTokens, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
}
