import React, {Component} from 'react';
import Login from './Login/index';
import Home from './Home/index';

import {Link, Route, Switch, hashHistory} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </div>
    )
}
};

export default App;
