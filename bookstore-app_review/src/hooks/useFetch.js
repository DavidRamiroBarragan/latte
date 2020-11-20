import {useEffect, useState} from 'react';
import httpService from 'services/Http/httpService';

export default function useFetch({url, method, body}) {
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null
  });
  useEffect(
    function () {
      async function fetchData() {
        try {
          let result = null;
          switch (method) {
            case 'GET':
              result = await httpService.get(url);
              break;
            case 'POST':
              result = await httpService.post(url, body);
              break;
            default:
              throw new Error('Invalid method');
          }
          if (result.isResponseOk) {
            setFetchState({
              isLoading: false,
              isSuccess: true,
              isFailed: false,
              error: null,
              data: result.json
            });
          } else {
            setFetchState({
              isLoading: false,
              isSuccess: false,
              isFailed: true,
              error: result.json,
              data: null
            });
          }
        } catch (error) {
          setFetchState({isLoading: false, isSuccess: false, isFailed: true, error, data: null});
        }
      }
      fetchData();
    },
    [url, method, body]
  );
  return fetchState;
}
