import React from 'react';

export default class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}
