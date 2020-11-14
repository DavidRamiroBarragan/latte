import http from './httpService';
import {BACKEND} from './consts';

export async function getBooks() {
  return http.get(`${BACKEND}/books`);
}

export async function addbook(book) {
  return http.post(`${BACKEND}/books`, book);
}

export async function getBookById(id) {
  return http.get(`${BACKEND}/books/${id}`);
}
