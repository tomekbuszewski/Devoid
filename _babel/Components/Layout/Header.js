import React from 'react';
import { Link } from 'react-router';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <h1><Link to="/">{this.props.title}</Link></h1>
      </header>
    )
  }
}
