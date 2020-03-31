// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import Axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");
  const [ronQuote, setRonQuote] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setIsLoading(true);

    async function getQuote() {
      try {
        const response = await Axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes/1");
        const quote = response.data[0];
        setIsLoading(false)
        setRonQuote(quote);

      }
      catch (error) {
        setHasError(error);
        setIsLoading(false);
      }
    }
    getQuote();
  }, []);

  return (
    <div className="bg-warning text-center">
      <img
        src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
        alt=""
        width="450"
        height="423"
        className="mt-4"
      />
      <div className="container">
        {/* Display a loading message */}
        {isLoading && (
          <div>Loading...</div>
        )}
        {/* Display an error message if the API fails */}
        {hasError && (
          <div>Failed to load</div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {ronQuote}
        </blockquote>
      </div>
    </div>
  );
}

export default App;
