import React from "react";
import Gallery from "./components/gallery.js";
// import something
import "./App.css";
import images from "./images/images.js"


function App() {
  return <div className="App">{
    <Gallery files={images}/>
  }</div>;
}

export default App;
