import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getBookById} from 'services/Http/book';

function Detail() {
  const {id} = useParams();
  const [actualBook, setActualBook] = useState(null);

  useEffect(() => {
    if (id) {
      getBookById(id).then(setActualBook);
    }
  }, [id]);
  return <div>{JSON.stringify(actualBook)}</div>;
}

export default Detail;
