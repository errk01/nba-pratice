import React from 'react'

import NewsSlider from '../Widgets/NewsSlider/NewsSlider';
import NewsList from '../Widgets/NewsList/NewsList';
import VideosList from '../Widgets/videosList/VideosList';

const Home = (props) => {
  return (
    <div>
      <NewsSlider 
      type="featured"
      start={0}
      amount={3}
      settings={{
        dots:false
      }}
      />
      <NewsList
      type="card"
      loadmore={true}
      start={3}
      amount={3}
      />
      <VideosList
      type="card"
      title={true}
      loadmore={true}
      start={0}
      amount={3}
      
      />
    </div>
  )
}

export default Home
