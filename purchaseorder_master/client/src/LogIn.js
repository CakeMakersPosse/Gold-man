import React, { Component } from 'react';

export default class LogIn extends Component {
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
                <h1>Welcome! Please log in</h1>
                <form id="signin" name="login" method="POST" action="/users/api/login">
                    <div>
                        <label htmlFor="name">Username: </label>
                        <input type="text" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="name">Password: </label>
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