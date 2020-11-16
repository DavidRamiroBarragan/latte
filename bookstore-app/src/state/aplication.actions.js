import {getBookById, getBooks} from 'services/Http/book';
import {getCategories} from 'services/Http/category';
import localstorageUtils from 'utils/localStorageUtils';
import {
  BOOKS_LOADING,
  ADD_BOOKS,
  BOOKS_ERROR,
  ADD_BOOK,
  GET_BOOK_BY_ID,
  GET_BOOKS_BY_CATEGORY,
  GET_CATEGORIES
} from './aplication.types';

export const fetchBooksAction = (dispatch) => {
  dispatch({type: BOOKS_LOADING});
  getBooks()
    .then((response) => {
      dispatch({type: ADD_BOOKS, payload: response});
      localstorageUtils.setItem('books', response);
    })
    .catch((e) => dispatch({type: BOOKS_ERROR, payload: e}));
};

export const getBooksByCategory = (category) => (dispatch) => {
  dispatch({type: GET_BOOKS_BY_CATEGORY, payload: category});
};

export const addBookAction = (user) => (dispatch) => {
  dispatch({type: BOOKS_LOADING});
  addBookAction(user)
    .then((respose) => {
      dispatch({type: ADD_BOOK, payload: respose});
    })
    .catch((e) => dispatch({type: BOOKS_ERROR, payload: e}));
};

export const getBookByIdAction = (id) => (dispatch) => {
  getBookById(id)
    .then((response) => dispatch({type: GET_BOOK_BY_ID, payload: response}))
    .catch((e) => dispatch({type: BOOKS_ERROR, payload: e}));
};

export const fetchCategoriesAction = async (dispatch) => {
  dispatch({type: BOOKS_LOADING});
  try {
    const categories = await getCategories();
    dispatch({type: GET_CATEGORIES, payload: categories});
  } catch (error) {
    dispatch({type: BOOKS_ERROR, payload: error});
  }
};
