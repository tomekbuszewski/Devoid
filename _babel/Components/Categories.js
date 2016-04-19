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
    }
  }

  getCategories() {
    console.log(this.props.data);
    let a = this.categories.filter(cat => cat.id === 2);
    console.log(a);
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
