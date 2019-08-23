import React, { useEffect, useState } from "react";

import axios from 'axios';

export default function CharacterList() {
  const[characterList, setCharacterList] = useState([]);

  useEffect(() => {

    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacterList(response.data.results)
          console.log(response);
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }

      getCharacters();

  }, []);




  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
