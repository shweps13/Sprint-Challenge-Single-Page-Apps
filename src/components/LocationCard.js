import React from "react";

export default function LocationCard (props) {
  const { name, type, dimension, residents } = props;
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </div>
      <p>{`${residents.length} residents`}</p>
    </div>
  )
}