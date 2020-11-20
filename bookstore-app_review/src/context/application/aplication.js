import {createContext, useMemo} from 'react';
import useBooks from './useBooks';
import useCategories from './useCategories';

export const AplicationContext = createContext();

export default function AppProvider({children}) {
  const booksRequest = useBooks();
  const categoriesRequest = useCategories();

  const value = useMemo(() => ({booksRequest, categoriesRequest}), [
    booksRequest,
    categoriesRequest
  ]);

  return <AplicationContext.Provider value={value}>{children}</AplicationContext.Provider>;
}
