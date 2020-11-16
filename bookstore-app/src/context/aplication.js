import {createContext, useCallback, useEffect, useMemo} from 'react';
import {useThunkReducer} from 'hooks/useThunkReducer';
import {aplicationReducer, inititalState} from 'state/aplication.reducer';
import {fetchBooksAction, fetchCategoriesAction} from 'state/aplication.actions';

export const AplicationContext = createContext();

export default function AppProvider({children}) {
  const [state, dispatch] = useThunkReducer(aplicationReducer, inititalState);

  const {books, categories} = state;

  useEffect(() => {
    dispatch(fetchCategoriesAction);
    dispatch(fetchBooksAction);
  }, [dispatch]);

  const getBooks = useCallback(() => {
    dispatch(fetchBooksAction);
  }, [dispatch]);
  const getCategories = useCallback(() => dispatch(fetchCategoriesAction), [dispatch]);

  const value = useMemo(() => ({categories, books, getBooks, getCategories}), [
    categories,
    books,
    getBooks,
    getCategories
  ]);

  return <AplicationContext.Provider value={value}>{children}</AplicationContext.Provider>;
}
