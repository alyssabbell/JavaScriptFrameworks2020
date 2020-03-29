import React, { useState, useContext, createContext } from "react";
import "./App.css";
import translations from "./assets/translations.json";


const LanguageContext = createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <>
      <CreateAccount />
      </>
    </LanguageContext.Provider>
  );
}

function CreateAccount() {

  const [contextValue, setContextValue] = useContext(LanguageContext);

  /**
   * @see src/assets/trasnslations.json
   * @type {Object} this is an object of translations for a given language.
   * If "language" is "en", it will be English translations.
   * If "language" is "es", it will be Spanish translations.
   * @example
   * const t = translations["es"];
   * console.log(t);
   * // Result:
   * {
   *   "Create a New Account": "Crea una cuenta",
   *   "It’s quick and easy.": "Es rápido y fácil.",
   *    // ...
   * }
   */
  const t = translations[contextValue];

  /**
   * You will not need to change anything below this line.
   */
  return (
    <div className="container pt-4 pb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="h3">{t["Create a New Account"]}</h1>
          <p className="lead">{t["It’s quick and easy."]}</p>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setContextValue("en")}
          >
            English
          </button>
          |
          <button
            type="button"
            className="btn btn-link btn-sm"
            onClick={() => setContextValue("es")}
          >
            Español
          </button>
        </div>
      </div>
      <form>
        <div className="row form-group">
          <div className="col">
            <label htmlFor="firstName">{t["First Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="col">
            <label htmlFor="lastName">{t["Last Name"]}</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-6">
            <label htmlFor="email">{t["Email"]}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-6">
            <label htmlFor="password">{t["Password"]}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <p>
          <small>
            {
              t[
                "By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time."
              ]
            }
          </small>
        </p>
        <button type="submit" className="btn btn-lg btn-success">
          {t["Sign Up"]}
        </button>
      </form>
    </div>
  );
}

export default App;
