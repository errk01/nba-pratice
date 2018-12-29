import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { URL } from '../../../Config';
import style from './newsList.css';

import Button from '../Buttons/Button';
import CardInfo from '../cardInfo/CardInfo';

class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(res => {
        this.setState({
          teams: res.data
        });
      });
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(res => {
      this.setState({
        items: [...this.state.items, ...res.data],
        start,
        end
      });
    });
  };

  renderNews = type => {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: style.newsList_Wrapper,
              enterActive: style.newsList_Wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div>
              <div className={style.newsListItem}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      case 'cardMain':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: style.newsList_Wrapper,
              enterActive: style.newsList_Wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <Link to={`/articles/${item.id}`}>
              <div className={style.flex_wrapper}>
                <div
                  className={style.left}
                  style={{
                    background: `url('/images/articles/${item.image}')`
                  }}
                >
                  <div />
                </div>
                <div className={style.right}>
                  <CardInfo
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Link>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };
  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
