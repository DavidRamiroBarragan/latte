import React, {useEffect, useState} from 'react';
import {Card} from 'components/Card/Card';
import {getBooks} from 'services/Http/book';

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then(setBooks);
  }, []);
  return books.map((book) => {
    console.log(book);
    return <Card {...book} key={`${book.title}-${book.id}`} />;
  });
}

export default Home;
