import { useState } from "react";


interface FormValues {
    name : string
    email: string
    company : string
    message: string

}

// ALL THE LOGIC TO OUR FORM
export const useForm = ({ initialValues }: {initialValues : FormValues} ) => {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value; // what ever their typing
    const name: string = e.target.name;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return {
    values,
    handleChange,
  };
};
