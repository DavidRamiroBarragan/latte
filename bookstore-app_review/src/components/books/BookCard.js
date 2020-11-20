import React from 'react';
import {generatePath} from 'react-router-dom';
import {DETAIL} from 'routes/paths';
import Card from 'components/Card/Card';
import {Badge} from 'components/UI/Badges';
import {RowMax4Items} from 'components/UI/Layout';
import bookPropTypes from 'propTypes/book';

function Footer({book}) {
  return (
    <RowMax4Items>
      {book.categories.map((value) => (
        <Badge key={`${value}-${value.id}`} modifiers="success">
          {value.name}
        </Badge>
      ))}
    </RowMax4Items>
  );
}

Footer.propTypes = {
  book: bookPropTypes.isRequired
};

function BookCard({book}) {
  return (
    <Card
      {...book}
      footer={() => <Footer book={book} />}
      to={generatePath(DETAIL, {id: book.id})}
    />
  );
}

BookCard.propTypes = {
  book: bookPropTypes.isRequired
};

export default BookCard;
