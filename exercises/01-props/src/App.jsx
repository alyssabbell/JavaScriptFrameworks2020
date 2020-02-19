import React from "react";
import Welcome from "./components/Welcome.js"
import "./App.css";
// import something here

function App() {
  return <div className="App">
    <Welcome name="Jamal" />
    <Welcome name="Jamal" />
    <Welcome />
  </div>;
}

export default App;
