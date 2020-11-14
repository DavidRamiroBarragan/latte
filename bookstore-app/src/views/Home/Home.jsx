import React, {useEffect, useState} from 'react';
import {Card} from 'components/Card/Card';
import {getBooks} from 'services/Http/book';
import {RowMax4Items} from 'components/UI/Section';

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);
  return (
    <RowMax4Items>
      {books.map((book) => (
        <Card {...book} key={`${book.title}-${book.id}`} categoryView={true} />
      ))}
    </RowMax4Items>
  );
}

export default Home;
