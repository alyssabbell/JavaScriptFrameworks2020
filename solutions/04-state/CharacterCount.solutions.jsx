import React, { useState } from "react";

const CharacterCount = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Records the amount of words you type!</p>
      <textarea
        className="form-control"
        onChange={e => setCount(e.target.value.length)}
      />
      <p className="lead">Character Count: {count} </p>
    </>
  );
};

export default CharacterCount;
