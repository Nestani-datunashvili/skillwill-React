import React from "react";
import "./bookData.css";

const BookData = ({ title, description, characters, imageUrl }) => {
  return (
    <div className="container">
      <div className="img__container">
        <img src={imageUrl} alt="runner" />
      </div>
      <div className="content__container">
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Characters:</h3>
        <ul>
          {characters.map((char, index) => (
            <li key={index}>{char},</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookData;
