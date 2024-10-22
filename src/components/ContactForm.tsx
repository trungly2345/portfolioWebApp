import { useForm } from "../hooks/useForm";
import Button from "./Button";


type Props = {
  FirstName: string;
  email: string;
  company: string;
  message: string;
  onClose: () => void;
};

const ContactForm: React.FC<Props> = ({onClose}) => {
  const initialValues : FormValues = {
    name: '',
    email: '',
    employment: '',
    message: '',
  }

  const {values,handleChange} = useForm( {initialValues} );

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
   e.preventDefault();
   console.log("form submitted",values);
    
  };

 

  return (
    <div className="contact-form-container">
      <h1> Contact Me</h1>
      <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 w-50">
        <input
          type="text" 
          className="form-control"
          placeholder="Name"
          aria-describedby="basic-addon1"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
      </div>

      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Employment"
          name="email"
          value={values.email}
          aria-describedby="basic-addon2"
        />
      </div>

      <div className="input-group mb-3 w-50">
        <textarea
          className="form-control"
          placeholder="Enter your message here"
          name="message"
          rows={5}
          style={{resize: "none"}}
          onChange={handleChange}
          value={values.message || ' '}
        ></textarea>
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
    </div>
    
  );
};

export default ContactForm;
