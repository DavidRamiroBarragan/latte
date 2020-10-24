import React from "react";

function FormContactView({
  setInputData,
  submit,
  form,
  show,
  handleFileInput,
  fileInputref,
}) {
  return (
    <div>
      <form onSubmit={submit} enctype="multipart/form-data">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={setInputData}
            value={form?.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            onChange={setInputData}
            value={form?.email}
          />
        </div>
        <div>
          <label htmlFor="info">Info:</label>
          <textarea name="info" onChange={setInputData}>
            {form?.info}
          </textarea>
        </div>
        <div>
          <label htmlFor="info">File:</label>
          <input
            type="file"
            name="file"
            ref={fileInputref}
            onChange={() => handleFileInput(fileInputref.current.files)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {show && <pre>{JSON.stringify(form)}</pre>}
    </div>
  );
}

export default FormContactView;
