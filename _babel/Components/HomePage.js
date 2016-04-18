import React from 'react';

import SmallPost from './SmallPost';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.tempData = null;

    this.fetchPosts();
  }

  fetchPosts() {
    const url = '/wp-json/wp/v2/posts';
    const req = new XMLHttpRequest();

    req.open('get', url, true);
    req.onreadystatechange = () => {
      if(req.readyState === 4) {
        if(req.status === 200) {
          this.tempData = req.responseText;
          this.renderPosts();
        } else {
          throw new Error();
        }
      }
    }
    req.send();
  }

  renderPosts() {
    const data = this.tempData;

    this.tempData = JSON.parse(data);

    this.setState({ loaded: true });
  }

  render() {
    if(this.state.loaded) {
      return (
        this.props.children ||
        <div>
          {this.tempData.map((i) => {
            return (
              <SmallPost
                id={i['id']}
                key={i['id']}
                title={i['title']['rendered']}
                published={i['date']}
              />)
          })}
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }
  }
}
