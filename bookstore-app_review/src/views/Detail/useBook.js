import useFetch from 'hooks/useFetch';
import {BACKEND} from 'services/Http/consts';

export default function useBook(id) {
  return useFetch({
    url: `${BACKEND}/books/${id}`,
    method: 'GET',
  });
}
