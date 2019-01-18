import React, { Component } from 'react';
import { PostData } from './PostData';
import { Link } from 'react-router-dom';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        //Set default message
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        PostData('login', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Welcome! Please log in</h1>
                    <div>
                        <label htmlFor="name">Username: </label>
                        <input type="text" name="username" onChange={this.onChange} required />
                    </div>
                    <div>
                        <label htmlFor="name">Password: </label>
                        <input type="text" name="password" onChange={this.onChange} required />
                    </div>
                    <div>
                        <Link to = {`/profile`}><input type="submit" value="Login" className="button" onClick={this.login} /></Link>
                    </div>
            </div>
        );
    }
}