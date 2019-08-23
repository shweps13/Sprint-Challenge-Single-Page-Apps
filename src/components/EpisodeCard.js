import React from 'react'

export default function LocationCard (props) {
  const { name, airDate, episodeCode, characters } = props;
  return (
    <div>
        <h2>{name}</h2>
        <p>{episodeCode}</p>
        <p>{`Air date: ${airDate}`}</p>
    </div>
  )
}