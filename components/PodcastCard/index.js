import React from 'react';
import trimString from '../../utils/trimString';
import './style.css';

const PodcastCard = ({name, path}) => {
  const updatedName = trimString(name, 50);
  return (
    <div className="card">
      <div className="card__inner">
        <div
          className="card__photo"
          style={{backgroundImage: `url(${path})`}}
        />
        <span className="card__name">{updatedName}</span>
      </div>
    </div>
  );
};

export default PodcastCard;
