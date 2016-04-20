import React from 'react';

import Categories from '../Lists/Categories';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside>
        <h4>Kategorie</h4>
        <Categories />
        <h4>Tagi</h4>
        <Categories type="tags" />
      </aside>
    )
  }
}
