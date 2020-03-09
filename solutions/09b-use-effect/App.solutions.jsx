import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [dogImages, setDogImages] = useState([]);
  /**
   * amountOfImages
   * @type {number} the number of dog images to display on the screen.
   * This should be set when the user selects a value from the dropdown.
   */
  const [amountOfImages, setAmountOfImages] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios(
        /**
         * @see https://dog.ceo/dog-api/documentation/random#all
         */
        `https://dog.ceo/api/breeds/image/random/${amountOfImages}`
      );
      setDogImages(response.data.message);
    })();
  }, [amountOfImages]); // This means an AJAX request is made whenever amountOfImages changes

  return (
    <div className="App">
      <h1>Dogs</h1>
      <select onChange={e => setAmountOfImages(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div className="container">
        {dogImages &&
          dogImages.map((dogImage, idx) => {
            return <img key={`dog-${idx}`} height="200" src={dogImage} />;
          })}
      </div>
    </div>
  );
}

export default App;
