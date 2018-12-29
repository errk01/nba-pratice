import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './Hoc/Layout/Layout'

import NewsArticles from './components/Articles/News/Post/NewsArticles'
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/articles/:id" component={NewsArticles} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
