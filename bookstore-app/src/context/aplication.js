import {createContext, useCallback, useEffect, useMemo} from 'react';
import {useThunkReducer} from 'hooks/useThunkReducer';
import {aplicationReducer, inititalState} from 'state/aplication.reducer';
import {fetchBooksAction, getCategoriesAction} from 'state/aplication.actions';

export const AplicationContext = createContext();

export default function AppProvider({children}) {
  const [state, dispatch] = useThunkReducer(aplicationReducer, inititalState);

  const {books, actual_book, categories} = state;

  useEffect(() => {
    dispatch(getCategoriesAction);
    dispatch(fetchBooksAction);
  }, [dispatch]);

  const getBooks = useCallback(() => {
    dispatch(fetchBooksAction);
  }, [dispatch]);

  const value = useMemo(() => ({categories, books, actual_book, getBooks}), [
    categories,
    books,
    actual_book,
    getBooks
  ]);

  return <AplicationContext.Provider value={value}>{children}</AplicationContext.Provider>;
}
