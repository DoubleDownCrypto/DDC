import React, {Component} from 'react';
import Login from './Login/index';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div>
        <div>
          <ul>
            <li><Link to='./home'>Home</Link></li>
            <li><Link to='./login'>Login</Link></li>
          </ul>
        </div>

        <Switch>
          <Route path='/login' component={Login}/>
        </Switch>

      </div>
    )
}
};

export default App;
