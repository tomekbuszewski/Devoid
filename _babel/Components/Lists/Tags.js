import React from 'react';

import Fetcher from '../../Tools/XML';
import ListItem from './ListItem';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.categories = null;
    this.state = { loaded: false };

    this.fetchCategories = this.fetchCategories.bind(this);

    new Fetcher('categories', this.fetchCategories);
  }

  fetchCategories(response) {
    const cats = this.props.data;

    this.categories = JSON.parse(response);

    if(this.props.data) {
      this.getCategories();
    } else {
      this.setState({ loaded: true });
    }
  }

  getCategories() {
    this.categories = this.categories.filter(cat => this.props.data.indexOf(cat.id) > -1);
    this.setState({ loaded: true });
  }

  render() {
    if(this.state.loaded) {
      return (
        <ul>
        {this.categories.map(i => {
          return (
            <ListItem name={i.name} link={i.link} key={i.id} />
          )
        })}
        </ul>
      )
    } else {
      return (<div>...</div>)
    }
  }
}
