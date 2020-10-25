import useForm from 'hooks/useForm';
import React, {useRef, useState} from 'react';
import FormContactView from './FormContactView';

function FormContact() {
  const [form, setForm] = useForm({name: '', email: '', info: '', file: {}});
  const [show, setShow] = useState(false);

  const referencia = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(form).length) {
      setShow((show) => !show);
    }
  };

  const setInputData = (e) => {
    setForm({[e.target.name]: e.target.value});
  };

  const handleFileInput = (files) => {
    setForm({file: files[0]});
    console.log(files);
  };

  return (
    <FormContactView
      setInputData={setInputData}
      submit={handleSubmit}
      show={show}
      form={form}
      handleFileInput={handleFileInput}
      fileInputref={referencia}
    />
  );
}

export default FormContact;
