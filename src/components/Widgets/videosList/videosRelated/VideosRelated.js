import React from 'react';
import style from '../videosList.css';
import VideosListTemplate from '../VideosListTemplate';

const VideosRelated = props => (
  <div className={style.relatedWrapper}>
    <VideosListTemplate data={props.data} teams={props.teams} />
  </div>
);

export default VideosRelated;
