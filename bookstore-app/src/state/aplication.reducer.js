import {
  ADD_BOOK,
  ADD_BOOKS,
  BOOKS_ERROR,
  BOOKS_LOADING,
  GET_BOOK_BY_ID,
  GET_BOOKS_BY_CATEGORY,
  GET_CATEGORIES
} from './aplication.types';

export const inititalState = {
  books: [],
  actual_book: {},
  categories: [],
  actual_category: {},
  error: null,
  loading: false
};

export const aplicationReducer = (state, action) => {
  switch (action.type) {
    case BOOKS_LOADING:
      return {
        ...state,
        loading: true
      };

    case BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case GET_BOOKS_BY_CATEGORY:
      return {
        ...state,
        books: state.books.filter((book) => {
          return book.categories.some((cat) => cat.name === action.payload);
        }),
        loading: false,
        error: null
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
        loading: false,
        error: null
      };
    case GET_BOOK_BY_ID:
      return {
        ...state,
        actual_book: action.payload,
        loading: false,
        error: null
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        error: null,
        loading: false
      };
    default:
      return state;
  }
};
