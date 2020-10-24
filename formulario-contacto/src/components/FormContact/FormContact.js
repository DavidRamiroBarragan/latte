import useForm from "hooks/useForm";
import React, { useState } from "react";
import FormContactView from "./FormContactView";

function FormContact() {
  const [form, setForm] = useForm({});
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(form).length) {
      setShow((show) => !show);
    }
  };

  const setInputData = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  return (
    <FormContactView
      setInputData={setInputData}
      submit={handleSubmit}
      show={show}
      form={form}
    />
  );
}

export default FormContact;
