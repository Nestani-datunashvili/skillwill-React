import React from "react";
import "./index.css";
import BookData from "./Components/BookData/BookData";
import Button from "./Components/Button/Button";
import poto from "./assets/book.jpg";

const App = () => {
  const bookData = {
    title: "The Kite Runner",
    description:
      "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
    characters: ["Amir", "Hassan", "Ali", "Farid"],
    imageUrl: poto,
  };

  const handleButtonClick = (title, characters) => {
    console.log(`Title: ${title}`);
    console.log("Characters:", characters);
  };
  return (
    <div>
      <BookData
        title={bookData.title}
        description={bookData.description}
        characters={bookData.characters}
        imageUrl={bookData.imageUrl}
      />
      <Button
        onButtonClick={handleButtonClick}
        title={bookData.title}
        characters={bookData.characters}
      />
    </div>
  );
};

export default App;
