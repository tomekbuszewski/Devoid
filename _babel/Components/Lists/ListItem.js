import React from 'react';
import { Link } from 'react-router';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.link) {
      // console.log(window.location.host);
      this.link = this.props.link.split(window.location.host).pop();
    }
  }

  render() {
    if(this.link) {
      return (
        <li><Link to={this.link}>{this.props.name}</Link></li>
      )
    } else {
      return (
        <li>{this.props.name}</li>
      )
    }
  }
}
