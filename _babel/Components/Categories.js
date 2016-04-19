import React from 'react';

import Fetcher from '../Tools/XML';

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
      this.parseCategories();
    }
  }

  getCategories() {
    this.categories = this.categories.filter(cat => this.props.data.indexOf(cat.id) > -1);
    this.parseCategories();
  }

  parseCategories() {
    this.categories.map(item => {
      console.log(item);
    });
  }

  render() {
    if(this.props.embed) {
      return (
        <div>
          Kategorie
        </div>
      );
    } else {
      return (
        <div className="sidebar__box">
          <h4>Kategorie</h4>
        </div>
      );
    }
  }
}
