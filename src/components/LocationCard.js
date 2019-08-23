import React from "react";

import { Card } from 'semantic-ui-react'

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <br></br>
        <p>{type} : {dimension}</p>
      </Card.Content>
      <Card.Content extra>
      <p className = "corner">{`${residents.length} residents`}</p>
      </Card.Content>
    </Card>
  )
}