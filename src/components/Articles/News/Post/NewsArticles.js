import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../Config';

import style from '../../articles.css';
import Header from './Header';

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`).then(res => {
      let article = res.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then(res => {
        this.setState({
          article,
          team: res.data
        });
      });
    });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div className={style.articleWrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={style.articleBody}>
        <h1>{article.title}</h1>
        <div className={style.articleImage}
        style={{
            background:`url('/images/articles/${article.image}')`
        }}
        >
        </div>
        <div className={style.articleText}>
            {article.body}
        </div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
