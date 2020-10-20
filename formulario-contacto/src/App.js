import React, { useReducer, useState } from 'react';
import FormContact from './components/FormContact';

function App() {
  const [form, setForm] = useReducer(
    (inputsData, newInputData) => ({ ...inputsData, ...newInputData }),
    {},
  );
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!Object.keys(form).length) setShow((show) => !show);
  };

  const setInputData = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  return (
    <div className='App'>
      <FormContact setInputData={setInputData} submit={handleSubmit} />
      {show && <pre>{JSON.stringify(form)}</pre>}
    </div>
  );
}

export default App;

//3473b37d78285936c6bd6f98de875af4d5c330bb
