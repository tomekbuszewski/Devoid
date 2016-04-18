import React from 'react';
import { render } from 'react-dom';
import Time from 'react-time';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.postData = null;

    this.state = { loaded: false }

    if(this.props.params.slug) {
      this.fetchPost();
    }
  }

  fetchPost() {
    const url = '/wp-json/wp/v2/posts?slug=' + this.props.params.slug;
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
    this.postData = JSON.parse(this.postData)[0];

    this.setState({ loaded: true }, () => {
      document.title = this.postData.title.rendered + ' - Blog';
    });
  }

  render() {
    if(this.state.loaded) {
      return (
        <article>
          <header>
            <h1>{this.postData.title.rendered}</h1>
            <Time value={this.postData.date} format="DD.MM.YYYY, HH:mm" />
          </header>
          <div className="post__content" dangerouslySetInnerHTML={{__html: this.postData.content.rendered}}></div>
        </article>
      )
    } else if(!this.props.params.slug) {
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
