import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {}
  };

  render() {
    return(
      <div>
        Welcome to the landing page
        <ul>
          <li><Link to='./login'>Login</Link></li>
        </ul>
      </div>
    )
  }
};

export default Home;