import React from 'react';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.categories = null;

    this.state = { loaded: false };

    this.fetchCategories();
  }

  fetchCategories() {
    const cats = this.props.data;




    const url = '/wp-json/wp/v2/categories';
    const req = new XMLHttpRequest();

    req.open('get', url, true);
    req.onreadystatechange = () => {
      if(req.readyState === 4) {
        if(req.status === 200) {
          this.categories = JSON.parse(req.responseText);
          if(this.props.data) {
            this.getCategories();
          }
        } else {
          throw new Error();
        }
      }
    }
    req.send();
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
