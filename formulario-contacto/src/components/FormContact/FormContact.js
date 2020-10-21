import React, { useReducer, useState } from 'react';
import FormContactView from './FormContactView';

function formReducer(state, action) {
  if (action.type === 'SET_FORM'){
    return {...state, [action.input.name]: action.input.value};
  }
}

function FormContact() {
  const [form, setForm] = useReducer(
    (inputsData, newInputData) => ({ ...inputsData, ...newInputData }),
    {},
  );
  const [show, setShow] = useState(false);
  const [gerForm, dispatch] = useReducer(
    formReducer,
    {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(form).length) {
      setShow((show) => !show);
    }
  };

  const setInputData = (e) => {
    dispatch({
      type: 'SET_FORM',
      input: {
        name: e.target.name,
        value: e.target.value
      }
    });
  };

  return (
      <FormContactView setInputData={setInputData} submit={handleSubmit} show={show} form={form} />
  );
}

export default FormContact;

//3473b37d78285936c6bd6f98de875af4d5c330bb
