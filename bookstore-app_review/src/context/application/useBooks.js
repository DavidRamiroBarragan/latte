import useFetch from 'hooks/useFetch';
import {BACKEND} from 'services/Http/consts';

export default function useBooks() {
  return useFetch({
    url: `${BACKEND}/books`,
    method: 'GET',
  });
}
