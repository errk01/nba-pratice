import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './Hoc/Layout/Layout';

import NewsArticles from './components/Articles/News/Post/NewsArticles';
import VideoArticle from './components/Articles/Videos/Video/VideoArticle';
import NewsMain from './components/Articles/News/Main/NewsMain';
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={NewsMain} />
          <Route exact path="/articles/:id" component={NewsArticles} />
          <Route exact path="/videos/:id" component={VideoArticle} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
