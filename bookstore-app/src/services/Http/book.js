import http from './httpService';
import {BACKEND} from './consts';

export async function getBooks() {
  return http.get(`${BACKEND}/books`);
}