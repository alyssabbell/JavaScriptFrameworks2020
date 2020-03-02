/**
 * I'm importing useContext() from React and "TranslatorContext"
 */
import React, { useContext } from "react";
import TranslatorContext from "../../contexts/TranslatorContext";

function Language() {
  /**
   * I need "setLangauge", which I get from the Context API,
   * so that I can change the language when the user clicks on
   * one of the language buttons below.
   */
  const [language, setLanguage] = useContext(TranslatorContext);
  return (
    <>
      {/* When clicked, this sets the language to English ("en") */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      |{/* When clicked, this sets the language to Spanish ("es") */}
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={() => setLanguage("es")}
      >
        Español
      </button>
    </>
  );
}

export default Language;
