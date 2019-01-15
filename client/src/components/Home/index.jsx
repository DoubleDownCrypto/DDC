import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {}
  };

  render() {
    //i will need the nav bar
    //need categories i.e most popular sports, featured esports game, etc.
    //need login / join
    //
    return(
      <div>
        Welcome to the landing page
        <div>
        <ul>
          <li><Link to='./login'>Login</Link></li>
        </ul>
        </div>
        
        <div></div>
      </div>
    )
  }
};

export default Home;