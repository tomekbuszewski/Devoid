import React from 'react';

import SmallPost from './../SmallPost';

import Fetcher from '../../Tools/XML';

export default class Archives extends React.Component {
  constructor(props) {
    super(props);

    this.tempData = null;

    this.state = { loaded: false };

    this.fetchContent = this.fetchContent.bind(this);
    let link  = `posts?filter[${this.determineLocation()}]=${this.props.params.slug}`;
    new Fetcher(link, this.fetchContent);
  }

  determineLocation() {
    let currentUrl = location.pathname;

    if(currentUrl.indexOf('/category/') > -1) {
      return 'category_name';
    } else if(currentUrl.indexOf('/tag/') > -1) {
      return 'tag';
    }
  }

  method() {
    alert('rejecter');
  }

  fetchContent(response) {
    this.tempData = JSON.parse(response);
    this.setState({ loaded: true });
  }

  render() {
    if(this.state.loaded) {
      return (<div>
        {this.tempData.map(i => {
          return (
            <SmallPost
              id={i['id']}
              key={i['id']}
              title={i['title']['rendered']}
              slug={i['slug']}
              published={i['date']}
            />
          )
        })}
      </div>);
    } else {
      return (<div>Loading...</div>);
    }
  }
}
