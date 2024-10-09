import React from "react";

// <Button whenClicked={() => {}} msg=""/>

// Contact Me - prop
// whenClicked - prop

type ButtonProps = {
  whenClicked: () => void;
  msg: string;
};

const Button = ({ whenClicked, msg }: ButtonProps) => {
  return (
    // <div className="d-grid gap-2 d-md-block">
    //   <button className ="btn btn-outline-secondary">Contact Me</button>
    //   <button className ="btn btn-outline-secondary">Download CV</button>
    // </div>
    <button
      onClick={whenClicked}
      className="btn btn-outline-dark btn rounded-pill"
      style={{ padding: "10px", fontFamily: "monospace" ,background:"rgba(255, 255, 255, 0.2)", boxShadow:"2px 2px"}}
    >
      {msg}
    </button>
  );
};

export default Button;
