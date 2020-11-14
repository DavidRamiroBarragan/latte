import React, {useEffect} from 'react';
import {useThunkReducer} from 'hooks/useThunkReducer';
import {useParams} from 'react-router-dom';
import {getBookByIdAction} from 'state/aplication.actions';
import {aplicationReducer, inititalState} from 'state/aplication.reducer';

function Detail() {
  const {id} = useParams();
  const [state, dispatch] = useThunkReducer(aplicationReducer, inititalState);
  const {actual_book} = state;

  useEffect(() => {
    dispatch(getBookByIdAction(id));
  }, [dispatch, id]);
  return <div>{JSON.stringify(actual_book)}</div>;
}

export default Detail;
