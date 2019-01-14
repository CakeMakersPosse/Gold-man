import React, { Component } from 'react';

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
        <h1>Home</h1>
        <h1>Welcome! Please log in</h1>
        <form id="signin" name="login" method="POST" action="/users/api/login">
          <div>
            <label for="name">Username: </label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label for="name">Password: </label>
            <input type="text" name="password" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <h1>Welcome! Please sign up</h1>

        <form id="signup" name="signup" method="POST" action="users/api/register">
          <div>
            <label for="name">First Name: </label>
            <input type="text" name="firstName" required />
          </div>
          <div>
            <label for="name">Last Name: </label>
            <input type="text" name="lastName" required />
          </div>
          <div>
            <label for="name">Email: </label>
            <input type="text" name="email" required />
          </div>
          <div>
            <label for="name">Username: </label>
            <input type="text" name="username" required />
          </div>
          <div>
            <label for="name">Password: </label>
            <input type="text" name="password" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}