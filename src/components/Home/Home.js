import React from 'react'
import NewsSlider from '../Widgets/NewsSlider/NewsSlider';
import NewsList from '../Widgets/NewsList/NewsList';

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
    </div>
  )
}

export default Home
