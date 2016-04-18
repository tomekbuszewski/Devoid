import React from 'react';
import { render } from 'react-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.postData = null;

    this.state = { loaded: false }

    if(this.props.params.id) {
      this.fetchPost();
    }
  }

  fetchPost() {
    const url = 'wp-json/wp/v2/posts/' + this.props.params.id;
    const req = new XMLHttpRequest();

    req.open('get', url, true);
    req.onreadystatechange = () => {
      if(req.readyState === 4) {
        if(req.status === 200) {
          this.postData = req.responseText;
          this.renderPost();
        } else {
          throw new Error();
        }
      }
    }
    req.send();
  }

  renderPost() {
    this.postData = JSON.parse(this.postData);

    this.setState({ loaded: true });
  }

  render() {
    if(this.state.loaded) {
      return (
        <article>
          <h1>{this.postData.title.rendered}</h1>
        </article>
      )
    } else if(!this.props.params.id) {
      return (
        <div>No post id specified</div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
