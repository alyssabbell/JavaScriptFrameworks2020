/**
 * I'm importing useState()
 */
import React, { useState } from "react";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import CreateAccount from "../CreateAccount/CreateAccount";
import Footer from "../Footer/Footer";
/**
 * I'm importing "TranslatorContext", which is what initializes the Context API
 */
import TranslatorContext from "../../contexts/TranslatorContext";

function App() {
  const [language, setLanguage] = useState("en");
  /**
   * I'm wrapping all my content in the "TranslatorContext" and storing "language" and "setLanguage" in the Context API.
   * Now any descendant component can access "language" and "setLanguage" through the Context API.
   */
  return (
    <TranslatorContext.Provider value={[language, setLanguage]}>
      <div className="App d-flex flex-column">
        <NavBar />
        <div className="container pt-4 pb-4">
          <CreateAccount />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </TranslatorContext.Provider>
  );
}

export default App;
