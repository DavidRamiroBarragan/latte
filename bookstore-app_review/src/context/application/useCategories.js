import useFetch from 'hooks/useFetch';
import {BACKEND} from 'services/Http/consts';

export default function useCategories() {
  return useFetch({
    url: `${BACKEND}/categories`,
    method: 'GET',
  });
}
