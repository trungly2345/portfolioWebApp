import { useState } from "react";


interface FormValues {
    name : string
    email: string
    employment : string
    message: string

}

// ALL THE LOGIC TO OUR FORM
export const useForm = ({ initialValues }: {initialValues : FormValues} ) => {
  const [values, setValues] = useState<FormValues>(initialValues);


  // handles the changes for an event when a input element is being rendered or a text area element is being rendered 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
