import React, {useEffect, useState} from 'react';
import {Card} from 'components/Card/Card';
import {Http} from 'services/Http/httpService';

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    Http.get().then(setBooks);
  }, []);
  return books.map((book) => {
    console.log(book);
    return <Card {...book} key={`${book.title}-${book.id}`} />;
  });
}

export default Home;
