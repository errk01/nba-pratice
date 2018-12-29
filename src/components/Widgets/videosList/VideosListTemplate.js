import React from 'react';
import style from './videosList.css';

import { Link } from 'react-router-dom';
import CardInfo from '../cardInfo/CardInfo';

const VideosListTemplate = props => {
  return props.data.map((item, i) => {
   return <Link to={`/videos/${item.id}`} key={i}>
      <div className={style.videoListItem_wrapper}>
        <div
          className={style.left}
          style={{
            background: `url(/images/videos/${item.image})`
          }}
        >
          <div />
        </div>
        <div className={style.right}>
        <CardInfo teams={props.teams} team={item.team} date={item.date}/>
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  });
};

export default VideosListTemplate;
