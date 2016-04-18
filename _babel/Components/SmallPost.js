import React from 'react';
import { Link } from 'react-router';

export default class SmallPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article id={this.props.key}>
        <h3>
          <Link to={'/post/' + this.props.id + '/' + this.props.slug}>{this.props.title}</Link>
        </h3>
        <time>{this.props.published}</time>
      </article>
    );
  }
}
