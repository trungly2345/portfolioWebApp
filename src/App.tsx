import React from "react";
import "./App.css";
import il from "./assets/li.svg";
import github from "./assets/github.png";
import { useState } from "react";
import Button from "./components/Button";
import me from "./assets/me.jpeg";
import ContactForm from "./components/ContactForm";

const App: React.FC = () => {
  const UserProps =  { 
    FirstName:"John",
    LastName:"Doe",
    email:"jdoe223@gmail.com",
    company:"Meta",
    message:"Hello, I'm interested in connecting with you",
    phoneNumber:"451-222-560",
  
  };
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState<boolean>(false);
  const [hoveredGitHub, setHoveredGitHub] = useState<boolean>(false);
  const [ShowContactForm, setShowContactForm] = useState(false);
  const FileUrl = "https://docs.google.com/document/d/1aQwSdBPbMyvyL6wF4sI6zgu16vu4bDYBcRXNVFO-KDY/edit?usp=sharing";
 

 

  const openGoogleDriveLink = () => {
    window.open(FileUrl, "_blank");
  };

 
  // 1 Lifecycle methods (Hooks) - useState(), useEffect()
  // 2 Making components

  // Make a contact me form
  // Take an imput of someones email, and message
  // Then send yourself an email based of the data

  // 3 LEARN ABOUT FLEX BOX!!

  return (
    <div>
      <text className="nametxt">trungly.io</text>
      <a
        href="https://www.linkedin.com/in/trung-ly-30151b184/"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src={il}
          alt="LinkedIn"
          className="li.svg"
          style={{
            transform: hoveredLinkedIn ? "scale(1.2)" : "scale(1)",
            opacity: hoveredLinkedIn ? 1 : 1,

            transition: "transform 0.3s, opacity .1s",
            position: "relative",
            width: "60px",
            height: "36px",
            top: "-10px",
            left: "10px",
            imageRendering: "auto",
          }}
          onMouseEnter={() => setHoveredLinkedIn(true)}
          onMouseLeave={() => setHoveredLinkedIn(false)}
        />
      </a>

      <a
        href="https://github.com/trungly2345"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src={github}
          alt="GitHub"
          className="github.png"
          style={{
            transform: hoveredGitHub ? "scale(1.2)" : "scale(1)",
            opacity: hoveredGitHub ? 1 : 1,

            transition: "transform 0.3s, opacity .1s",
            imageRendering: "auto",
            position: "relative",
            width: "45px",
            height: "36px",
            top: "-10px",
            left: "11px",
          }}
          onMouseEnter={() => setHoveredGitHub(true)}
          onMouseLeave={() => setHoveredGitHub(false)}
        />
      </a>
      <div className="container text-center">
        <h1 className="opener"> Welcome to my portfolio website</h1>

        <img
          src={me}
          style={{
            boxShadow:"2px 2px 2px 2px",
            borderRadius: "50%",
            width: "25%",
            height: "25%",
            marginTop: "-10px",
          }}
        />
        
        
        <p className="openingP border border-dark">
          Hello! My name is Trung, and I am a first-generation Vietnamese student in
          my senior year Computer Science at Iowa State University. I'm seeking an internship
          to enhance my skills in mobile/web app development and broader computer
          science roles.
        
          <br>
          </br>
          <br>
          </br>
       
          Passionate about technology's role in shaping society, I aim to
          contribute to innovations that improve everyday life. Let's connect to
          explore how I can bring my skills and enthusiasm to a dynamic team.
         
        
        </p>
     {/* Contact and download button */}
     <div className="btn-group gap-5">
          <Button
            whenClicked={() => {
              console.log("contact me button clicked");
              setShowContactForm(true);
            }}
            msg="Contact Me"
          />
          <Button
            whenClicked={() => {
              console.log("download cv button clicked");
              console.log("CV downloaded!");
              openGoogleDriveLink();
              
            

            } }
           
            msg="View Resume"
          />
        </div>
            {ShowContactForm && <ContactForm{...UserProps} /> }
      </div>

    </div>
  );
};

export default App;
