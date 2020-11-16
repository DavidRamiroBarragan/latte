import React, {useState, useMemo} from 'react';
import Card from 'components/Card/Card';
import {RowFlexEnd, RowMax4Items} from 'components/UI/Layout';
import SearchForm from './SearchForm/SearchForm';
import useAplicationContext from 'hooks/useAplicationContext';

function Home() {
  const [currentCategoryId, setCurrentCategoryId] = useState(-1);
  const {books, categories} = useAplicationContext();

  const booksToShow = useMemo(
    function () {
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

  return (
    <>
      <RowFlexEnd>
        <SearchForm
          options={categories}
          onChangeCategory={handleCategoryChange}
          currentCategoryId={currentCategoryId}
        />
      </RowFlexEnd>
      <RowMax4Items>
        {booksToShow.map((book) => (
          <Card {...book} key={`${book.title}-${book.id}`} />
        ))}
      </RowMax4Items>
    </>
  );
}

export default Home;
