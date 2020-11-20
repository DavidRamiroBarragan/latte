import React, {useState, useMemo} from 'react';
import useAplicationContext from 'hooks/useAplicationContext';
import HomeView from './HomeView';

function Home() {
  const [currentCategoryId, setCurrentCategoryId] = useState(-1);
  const {
    booksRequest: {data: books, isLoading: booksAreLoading, isFailed: getBooksFailed},
    categoriesRequest: {
      data: categories,
      isLoading: categoriesAreLoading,
      isFailed: getCategoriesFailed
    }
  } = useAplicationContext();

  const booksToShow = useMemo(
    function () {
      if (!books) {
        return null;
      }
      if (currentCategoryId > -1) {
        return books.filter((book) => {
          return book.categories.some((cat) => cat.id === currentCategoryId);
        });
      } else {
        return books;
      }
    },
    [books, currentCategoryId]
  );

  const handleCategoryChange = (event) => {
    setCurrentCategoryId(parseInt(event.target.value));
  };

  if (booksAreLoading || categoriesAreLoading) {
    return <div>Cargando información</div>;
  }

  if (getBooksFailed || getCategoriesFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  return (
    <HomeView
      books={booksToShow}
      handleCategoryChange={handleCategoryChange}
      currentCategoryId={currentCategoryId}
      categories={categories}
    />
  );
}

export default Home;
