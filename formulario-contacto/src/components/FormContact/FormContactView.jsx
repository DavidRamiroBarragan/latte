import React from "react";

function FormContactView({ setInputData, submit, form, show }) {
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={setInputData} value={form.name} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={setInputData} value={form.email} />
        </div>
        <div>
          <label htmlFor="info">Info:</label>
          <textarea name="info" onChange={setInputData}>{form.info}</textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {show && <pre>{JSON.stringify(form)}</pre>}
    </div>
  );
}

export default FormContactView;
