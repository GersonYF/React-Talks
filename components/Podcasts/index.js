import React from 'react';
import PodcastCard from '../PodcastCard';
import './style.css';

const Podcasts = ({podcasts}) => {
  return (
    <div className="podcasts">
      {podcasts.map(({id, title_original, thumbnail}) => (
        <PodcastCard key={id} path={`${thumbnail}`} name={title_original} />
      ))}
    </div>
  );
};

export default Podcasts;
