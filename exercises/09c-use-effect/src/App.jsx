import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [currCharacter, setCurrCharacter] = useState(1);
  const [currCharObj, setCurrCharObj] = useState();
  const [allCharacters, setAllCharacters] = useState([]);

  // grab all character names to fill dropdown with
  useEffect(() => {
    async function callCharNames() {
      try {
        const response = await axios("https://rickandmortyapi.com/api/character/");
        const arrayOfCharObjects = response.data.results;

        console.log(allCharacters);

        let characters = [...allCharacters];

        arrayOfCharObjects.map((char, index) => {
          let charId = char.id;
          let charName = char.name;

          characters.push({ charId, charName });
        })
        setAllCharacters(characters);
      }
      catch (error) {

      }
    }
    callCharNames();
  }, []);

  // function to handle the dropdown onChange - sets that Id into state variable
  const handleSelection = (e) => {
    setCurrCharacter(e.target.value);
  }

  // executed when the currCharacter id in state was changed
  useEffect(() => {
    async function getSelectedCharacter() {
      try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${currCharacter}`);
        setCurrCharObj(response.data);
      }
      catch (error) {

      }
    }
    getSelectedCharacter();
  }, [currCharacter]);


  return (
    <div className="container">
      <div className="row text-center" id="body">
        {
          currCharObj && (
            <div>
              <h1 id="title-head">{currCharObj.name}</h1>
              <div id="main-img">
                <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
                  <img
                    alt={currCharObj.name}
                    src={currCharObj.image}
                    height="250"
                  />
                </a>
              </div>
            </div>
          )
        }


        <div className="linkfooter">
          <p>Select your favorite character</p>
          {/* Handle event here */}
          <select id="dropdown" type="text" onChange={handleSelection}>
            {/* <option></option> */}
            {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            {allCharacters.map((character, index) => {
              return <option value={character.charId} key={character.charId}>{character.charName}</option>
            })
            }
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
