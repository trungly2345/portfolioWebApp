import { useForm} from "../hooks/useForm";
import Button from "./Button";
import { useState } from "react";

export interface FormValues {
  name: string;
  email: string;
  employment: string;
  message: string;
 
}
interface Props { 
  onClose: () => void;
}


// on handle submit, when i click on submit, i want the form sent to myself 
// would use node.js for handling backend functions 


const ContactForm: React.FC<Props> = ({onClose}) => {
  const initialValues : FormValues = {
    name: '',
    email: '',
    employment: '',
    message: '',
  }

  const {values,handleChange} = useForm( {initialValues} );
  const [errors, setErrors] = useState<FormValues | null>(null);
  const [responseMessage, setResponseMessage] = useState('');

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) errors.name = 'Name is required';
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.employment) errors.employment = 'Employment is required';
    if (!values.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErros = validate(values);
    if(Object.keys(validationErros).length > 0){
      setErrors(validationErros as FormValues);
      return;
    }
    setErrors(null);
    

    try { 
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      if(response.ok){
        setResponseMessage('Message sent successfully');
      } else {
        setResponseMessage('Message failed to send');
      }
      }catch (error){
        if (error instanceof Error) { 
        setResponseMessage('Error sending message' + error.message);
        } else {
          setResponseMessage('An error occured');
        }
      }
    };

  return (
    <div className="contact-form-container">
      <h1> Contact Me</h1>
    <form onSubmit={handleSubmit}> 
      <div className="input-group mb-3 w-50">

        <input
          type="text" 
          className="form-control inputfield"
          aria-describedby="basic-addon2"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        {errors?.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
          aria-describedby="basic-addon2"
          placeholder="Enter your email"
          required
        />
         {errors?.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          name="employment"
          value={values.employment}
          onChange={handleChange}
          placeholder="Enter employer's name"
          required
        />
        {errors?.employment && <p>{errors.employment}</p>}
      </div>

      <div className="input-group mb-3 w-50">
      <textarea
        className="form-control"
        name="message"
        rows={4} // Adjust the number of rows as needed
        style={{ resize: "none" }} // Prevents the user from resizing the textarea
        onChange={handleChange}
        value={values.message}
        aria-describedby="basic-addon2"
        placeholder="Enter your message here"
        required
     />
     {errors?.message && <p className="error">{errors.message}</p>}
    </div>
<div className="btn-group gap-5">

      <Button
        whenClicked={() => {
          console.log("Form submitted");
        }}
        msg="Submit"
      />

      <Button 
        whenClicked={() => {
          console.log("User exits out of the form");
          onClose();
        }}
        msg="Exit"
        />
  
   </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
    </div>
    
  );
};

export default ContactForm;
