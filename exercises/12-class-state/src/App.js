import React from "react";

// Import Likes here
// Import LessText here
// Import CharacterCount here
import Likes from "./components/Likes/Likes";
import LessText from "./components/LessText/LessText";
import CharacterCount from "./components/CharacterCount/CharacterCount";

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        {/* Add LessText with props here */}
        <LessText text="abcdefghijklmnopqrstuvwxyz" maxLength={15} />
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
