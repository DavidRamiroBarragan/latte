import React from 'react';
function FormContact({ setInputData, submit }) {
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' onChange={setInputData} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='text' name='email' onChange={setInputData} />
      </div>
      <div>
        <label htmlFor='info'>Info:</label>
        <textarea name='info' onChange={setInputData}></textarea>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default FormContact;
