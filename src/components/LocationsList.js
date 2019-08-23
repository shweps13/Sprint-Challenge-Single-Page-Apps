import React, { useEffect, useState } from 'react';

import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
    const[locationsList, setLocationsList] = useState([]);

    useEffect(() => {
        const getLocations = () => {
          axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(response => {
              setLocationsList(response.data.results)
              console.log("Location: ", response.data.results)
            })
            .catch(error => {
              console.error('Server Error', error);
            });
          }
    
          getLocations();
      }, [])

      return (
        <section className='locations-list grid-view'>
          {locationsList.map(location => {
            return (
                  <LocationCard 
                  location = {location}
                  key = {location.id}
                  name = {location.name}
                  type = {location.type}
                  dimension = {location.dimension}
                  residents = {location.residents}
                  />
            )
          })}
        </section>
      )

}
