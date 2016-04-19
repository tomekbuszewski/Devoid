import React from 'react';

import PageHeader from './Header';
import Categories from './Categories';
import SmallPost from './SmallPost';

import Fetcher from '../Tools/XML';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);

    this.state = {
      loaded: false
    }

    this.tempData = null;

    new Fetcher('posts', this.renderPosts);
  }

  renderPosts(response) {
    this.tempData = JSON.parse(response);
    this.setState({ loaded: true });
  }

  render() {
    document.title = 'Blog';

    if(this.state.loaded) {
      return (
        <div className="container">
          <PageHeader title="Nazwa strony" />
          <div className="columns">
            <main className="col-lg-8">
              {this.props.children ||
              this.tempData.map((i) => {
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
            </main>
            <aside className="col-lg-3">
              <Categories />
            </aside>
          </div>
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }
  }
}
