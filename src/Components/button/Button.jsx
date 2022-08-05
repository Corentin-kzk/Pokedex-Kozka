import React from "react";
import './button.css';


const Button = ({name, onClick}) => {
  return (
    <>
      <div className="button" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {name}
      </div>

    </>
  );
};

export default Button;
