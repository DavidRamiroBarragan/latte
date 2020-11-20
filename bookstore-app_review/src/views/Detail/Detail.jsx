import React from 'react';
import {useParams} from 'react-router-dom';
import useBook from './useBook';

function Detail() {
  const {id} = useParams();
  const {data: book, isLoading: bookAreLoading, isFailed: getBookFailed} = useBook(id);

  if (bookAreLoading) {
    return <div>Cargando libro con id {id}</div>;
  }

  if (getBookFailed) {
    return <div>Fallo al cargar el libro con id {id}</div>;
  }

  return <div>{JSON.stringify(book)}</div>;
}

export default Detail;
