import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  /**
   * quote
   * @type {string} quote that you will get back from the API
   */
  const [quote, setQuote] = useState('');
  /**
   * isLoading
   * @type {boolean} for displaying a loading symbol to the user
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * hasError
   * @type {boolean} for displaying a error message to the user
   * if there is a problem with the API
   */
  const [hasError, setHasError] = useState(false);
  /**
   * I want to put the AJAX request within the useEffect hook.
   * I'm using Axios and Async & Await, but you can use just promises, Fetch or whatever you want to make an AJAX request.
   */
  useEffect(async () => {
    try {
      /**
       * @see https://github.com/jamesseanwright/ron-swanson-quotes
       * (Async & Await make asynchronous code synchronous.)
       */
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    }
    catch (e) { // Your response if there is an error with the API
      console.error(e);
      setHasError(true);
    }
    setIsLoading(false);
  }, []); // Because of "[]", this will only make an AJAX request when the component first renders

  return (
    <body class="bg-warning text-center">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      class="mt-4"
    />
    <div class="container">
      {isLoading && <div>Loading ... </div>}
      {hasError && <div className="error bg-white text-secondary border border-secondary mb-4">Oops! An unexpected error has occurred.</div>}
      <blockquote
        id="quote"
        class="blockquote bg-dark text-white border-0 mb-4"
      >
        {quote}
      </blockquote>
    </div>
  </body>
  );
}

export default App;
