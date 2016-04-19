import React from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.link) {
      return (
        <li><Link to={this.props.link}>{this.props.name}</Link></li>
      )
    } else {
      return (
        <li>{this.props.name}</li>
      )
    }
  }
}
