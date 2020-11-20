import React from 'react';
import PropTypes from 'prop-types';
import {RowFlexEnd, RowMax4Items} from 'components/UI/Layout';
import BookCard from 'components/books/BookCard';
import bookPropTypes from 'propTypes/book';
import categoryPropTypes from 'propTypes/category';
import CategorySelector from './components/CategorySelector';

function HomeView({categories, handleCategoryChange, currentCategoryId, books}) {
  return (
    <>
      <RowFlexEnd>
        <CategorySelector
          categories={categories}
          onChangeCategory={handleCategoryChange}
          currentCategoryId={currentCategoryId}
        />
      </RowFlexEnd>
      <RowMax4Items>
        {books.map((book) => (
          <BookCard book={book} key={`${book.title}-${book.id}`} />
        ))}
      </RowMax4Items>
    </>
  );
}

HomeView.propTypes = {
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.number.isRequired,
  books: PropTypes.arrayOf(bookPropTypes).isRequired
};

export default HomeView;
