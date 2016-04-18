import React from 'react';
import { Link } from 'react-router';
import Time from 'react-time';

export default class SmallPost extends React.Component {
  constructor(props) {
    super(props);
  }

  prepareLink() {
    const date = this.props.published.substring(0,10).split('-');
    const link = `/${date[0]}/${date[1]}/${date[2]}/${this.props.slug}`;

    return link;
  }

  render() {
    this.prepareLink();

    return (
      <article id={this.props.key}>
        <h3>
          <Link to={this.prepareLink()}>{this.props.title}</Link>
        </h3>
        <Time value={this.props.published} format="DD.MM.YYYY, HH:mm" />
      </article>
    );
  }
}
