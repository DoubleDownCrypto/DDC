import React, {Component} from 'react';
import Login from './Login/index';
import Navigation from './Navigation/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Navigation />
        <Login/>
      </div>
    )
  }
};

export default App;
