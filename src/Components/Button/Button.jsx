import React from "react";
import "./Button.css";

const Button = ({ title, characters, onButtonClick }) => {
  return (
    <div>
      <button onClick={() => onButtonClick(title, characters)}>Log info</button>
    </div>
  );
};

export default Button;
