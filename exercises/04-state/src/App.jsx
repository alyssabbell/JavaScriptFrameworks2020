import React from "react";
import "./App.css";
import LessText from "./components/LessText.js"
import CharacterCount from "./components/CharacterCount";
// Import LessText here
// Import CharacterCount here

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {/* Add LessText with props here */}
        <LessText text="Lorem ipsum, or lipsum as it is sometimes known, 
        is dummy text used in laying out print, graphic or web designs. 
        The passage is attributed to an unknown typesetter in the 15th 
        century who is thought to have scrambled parts of 
        Cicero's De Finibus Bonorum et Malorum for use in 
        a type specimen book." maxLength={"30"} />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
