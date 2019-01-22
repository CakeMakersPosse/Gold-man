import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Purchase from './Purchase';
import AddItem from './AddItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/additem" component={AddItem} />
        </Switch>
      </div>
    );
  }
}