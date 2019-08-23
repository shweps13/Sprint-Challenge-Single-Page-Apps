import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

 function CharacterCard(props) {
  const {image,name,species,status,location, origin} = props;

  
  return (   
    <Card>
      <Image src={image} alt={name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
        <span className='date'>{species} {status}</span>
        </Card.Meta>
        <Card.Description>
        <p>Location: {location.name}</p>
        <p>Origin: {origin.name}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a> 
    </Card.Content>
  </Card>
  );
}

export default CharacterCard;