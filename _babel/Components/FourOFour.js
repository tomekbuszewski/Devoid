import React from 'react';
import { Link } from 'react-router';

export default class FourOFour extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>404</h1>
        <Link to="/">Wróć do strony głównej</Link>
      </div>
    );
  }
}
