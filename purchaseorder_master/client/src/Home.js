import React, { Component } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

export default class Home extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'Loading...'
    }
  }
  componentDidMount() {
    //GET message from server using fetch api
    fetch('/api/home')
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }
  render() {
    return (
      <div>
        <SignUp />
        <br />
        <LogIn />
      </div>
    );
  }
}