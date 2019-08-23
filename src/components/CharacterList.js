import React, { useEffect, useState } from "react";

import axios from 'axios';
import Card from "./CharacterCard";

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
      {characterList.map(character => {
        return (
              <Card 
              character = {character}
              key = {character.id}
              image = {character.image}
              name = {character.name}
              species = {character.species}
              status = {character.status}
              location = {character.location}
              origin = {character.origin}
              />
        )
      })}
    </section>
  );
}
