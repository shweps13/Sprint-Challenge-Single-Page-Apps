import React from "react";


 function CharacterCard(props) {
  const {image,name,species,status,location, origin} = props;

  
  return (   
    <div>
    <img src={image} alt={name}/>
    <div>
      <h2>{name}</h2>
      <div>
        <p>{species} {status}</p>
      </div>
      <p>Location: {location.name}</p>
      <p>Origin: {origin.name}</p>
      <p>Episodes</p>
    </div>
  </div>
  );
}

export default CharacterCard;