import http from './httpService';
import {BACKEND} from './consts';

export async function getCategories() {
  return http.get(`${BACKEND}/categories`);
}
