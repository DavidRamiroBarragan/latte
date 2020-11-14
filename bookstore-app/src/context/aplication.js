import {createContext, useCallback, useEffect, useMemo} from 'react';
import {useThunkReducer} from 'hooks/useThunkReducer';
import {aplicationReducer, inititalState} from 'state/aplication.reducer';
import {fetchBooksAction, getBooksByCategory, getCategoriesAction} from 'state/aplication.actions';

export const AplicationContext = createContext();

export default function AppProvider({children}) {
  const [state, dispatch] = useThunkReducer(aplicationReducer, inititalState);

  const {books, actual_book, categories} = state;
  const libros = useMemo(() => books, [books]);

  useEffect(() => {
    dispatch(getCategoriesAction);
    dispatch(fetchBooksAction);
  }, [dispatch]);

  const getBooks = useCallback(() => {
    dispatch(fetchBooksAction);
  }, [dispatch]);

  const getBooksWithCategory = useCallback(
    (category) => {
      dispatch(getBooksByCategory(category));
    },
    [dispatch]
  );

  return (
    <AplicationContext.Provider
      value={{categories, libros, actual_book, getBooks, getBooksWithCategory}}
    >
      {children}
    </AplicationContext.Provider>
  );
}
