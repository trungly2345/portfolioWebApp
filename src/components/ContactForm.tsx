
import Button from "./Button";
import { useState } from "react";

type Props = {
  FirstName: string;
  LastName: string;
  email: string;
  company: string;
  message: string;
  phoneNumber: string;
};



const ContactForm: React.FC<Props> = (props) => {
  //deconstruction of props 
  const {FirstName, LastName ,email,company,message,phoneNumber} = props;

  const {ExitForm,setExitForm} = useState(false);


  return ( <div className="contact-form"> 
  <h1> First Name {FirstName}</h1>
  <h2> Last Name{LastName}</h2>
  <h3> Company {company}</h3>
  <p>message{message}</p>
  <p>email{email} </p>
  <p>phoneNumber {phoneNumber}</p>
  <div className="btn-group gap-5">

<Button 
  whenClicked={()=> {
    console.log("Exited out of the form")
    
  }}
  msg="Send"
  />
  </div>
  </div>
  );
};


export default ContactForm;