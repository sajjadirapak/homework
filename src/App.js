import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Show,Counter} from './components';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/counter" activeClassName="active">Counter</NavLink></li>
              <li><NavLink to="/show" activeClassName="active">show</NavLink></li>

            </ul>
          </div>
          <div >
            <Switch>
                <Route path="/counter" component={Counter} exact={true} />
                <Route path="/show" component={Show} />                                                                                                                                          
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;