const {useState, useEffect} = require('react');
const {localstorageUtils} = require('utils/localStorageUtils');

export default function useAuth() {
  const [authTokens, setAuthTokens] = useState(exitstingToken);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authTokens) {
      setIsAuthenticated(true);
    }
  }, [authTokens]);

  function exitstingToken() {
    return localstorageUtils.getItem('auth');
  }

  function setTokens(data) {
    localstorageUtils.setItem('auth', data);
    setAuthTokens(data);
  }

  return {authTokens, exitstingToken, setTokens, isAuthenticated};
}
