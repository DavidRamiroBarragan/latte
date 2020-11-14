import React, {useEffect, useState} from 'react';
import {Card} from 'components/Card/Card';
import {RowFlexEnd, RowMax4Items} from 'components/UI/Layout';
import {PrimaryButton} from 'components/UI/ButtonsStyles';
import SearchForm from 'components/SearchForm/SearchForm';
import {useParams} from 'react-router-dom';
import useAplicationContext from 'hooks/useAplicationContext';

function Home() {
  const [categoryView, setCategoryView] = useState(false);
  const {libros, categories, getBooks, getBooksWithCategory} = useAplicationContext();
  const {keyword} = useParams();

  useEffect(() => {
    console.log(categories);
    if (categories.some((category) => category.name === keyword)) {
      getBooksWithCategory(keyword);
    } else {
      getBooks();
    }
    // eslint-disable-next-line
  }, [keyword, getBooks, getBooksWithCategory]);

  const setViewCategories = () => setCategoryView((oldState) => !oldState);
  return (
    <>
      <RowFlexEnd>
        <PrimaryButton
          modifiers="small"
          onClick={setViewCategories}
          modifiers={
            categoryView ? ['small', 'primaryButtonSuccess'] : ['small', 'primaryButtonWarning']
          }
        >
          View Categories
        </PrimaryButton>
        <SearchForm options={categories} />
      </RowFlexEnd>
      <RowMax4Items>
        {libros.map((book) => (
          <Card {...book} key={`${book.title}-${book.id}`} categoryView={categoryView} />
        ))}
      </RowMax4Items>
    </>
  );
}

export default Home;
