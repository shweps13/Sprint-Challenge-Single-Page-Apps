import React, { useEffect, useState } from 'react';

import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  const[episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          setEpisodeList(response.data.results)
          console.log("Episodes", response.data.results)
          
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }

      getEpisodes();

  }, [])

  return (
    <section className='episode-list grid-view'>
      {episodeList.map(episode => {
        return (
              <EpisodeCard 
              episode = {episode}
              key = {episode.id}
              name = {episode.name}
              airDate = {episode.air_date}
              episodeCode = {episode.episode}
              characters = {episode.characters}
              />
        )
      })}
    </section>
  )

}