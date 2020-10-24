import { useReducer } from "react";

export default function useForm(initialValues) {
  const [form, setForm] = useReducer(
    (inputsData, newInputData) => ({ ...inputsData, ...newInputData }),
    initialValues
  );

  return [form, setForm];
}
