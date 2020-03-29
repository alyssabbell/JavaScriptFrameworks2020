// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  // holds a single string of image url in dogImages
  /** You may need to set something else in state
 */
  const [dogImages, setDogImages] = useState([]);
  const [hasError, setHasError] = useState("");
  const [numOfImages, setNumOfImages] = useState(1);

  /**Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    async function getImage() {
      try {
        const response = await axios(`https://dog.ceo/api/breeds/image/random/${numOfImages}`);
        const imageUrl = response.data.message;

        setDogImages(imageUrl);
      }
      catch (error) {
        setHasError(error);
      }
    }
    getImage();
  }, [numOfImages]);

  // sets the value selected by user into state
  //  const setNumbers = (e) => {
  //   setNumOfImages(e.target.value);
  //   console.log("number selected; " + e.target.value);
  //  }

  console.log(characterNames);


  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Attach an event handler */}
      <select value={numOfImages} onChange={e => setNumOfImages(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="container">
        {dogImages &&
          (dogImages.map((dogImage, idx) => {
            return <img key={`dog-${idx}`} height="200" src={dogImage} />;
          })
          )
        }
        {hasError &&
          (
            <div>Error</div>
          )}
      </div>
    </div>
  );
}

export default App;

   // Axios("https://dog.ceo/api/breeds/image/random")
    // .then(response => {
    //   console.log(response.data.message);

    //   let newDogImages = [...dogImages];

    //   newDogImages.push(response.data.message);
    //   setDogImages([newDogImages]);

    // });