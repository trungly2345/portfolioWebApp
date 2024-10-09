
import { Container } from "@tsparticles/engine";
import Button from "./Button";
import { useState } from "react";

type Props = {
  FirstName: string;
  email: string;
  company: string;
  message: string;
};



const ContactForm: React.FC<Props> = (props) => {
  //deconstruction of props 
 

  const {ExitForm,setExitForm} = useState(false);


  return (
    
    <div className="contact-form"> 
    <h1> Contact Me</h1>
    <p> I look forward to connect! <br></br>
      I'll get back to you whenever I can!</p>
    <div className="input-group mb-3 w-50">
    <input type="text" className="form-control" placeholder="name" aria-describedby="basic-addon1"/>
    </div>
    

      <div className="input-group mb-3 w-50"> 
      <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon2"/>
        </div> 

       <div className="input-group mb-3 w-50"> 
      <input type="text" className="form-control" placeholder="Employment" aria-describedby="basic-addon2"/>
        </div> 

        <div className="input-group mb-3 w-50"> 
        <textarea className="form-control" placeholder="Enter your message here" rows={5}> </textarea>
       
        </div> 
      
      

   
   
<Button
  whenClicked={()=> {
    console.log("Sent form")
    
  }}
  msg="Submit form"
  />
   </div>



   
  

  
  );
};


export default ContactForm;