import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

export default function LocationCard (props) {
  const { name, airDate, episodeCode } = props;
  return (
    <Card>
        <Card.Content header={name} />
        <Card.Content description={episodeCode} />
        <Card.Content extra>
            <Icon name='calendar alternate outline' />{airDate}
        </Card.Content>
    </Card>
  )
}