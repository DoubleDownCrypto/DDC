import React, {Component} from 'react';
import Login from './Login/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Login/>
      </div>
    )
  }
};

export default App;
