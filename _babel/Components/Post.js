import React from 'react';
import { render } from 'react-dom';
import Time from 'react-time';
import Categories from './Categories';

import Fetcher from '../Tools/XML';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.renderPost = this.renderPost.bind(this);
    this.postData = null;
    this.state = { loaded: false }

    if(this.props.params.slug) {
      new Fetcher('posts?slug='+this.props.params.slug, this.renderPost);
    }
  }

  renderPost(responseText) {
    this.postData = JSON.parse(responseText)[0];

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
            <Categories data={this.postData.categories} embed="true" />
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
