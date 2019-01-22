import React, { Component } from 'react';
import { PostData } from './PostData';
import { Link } from 'react-router-dom';
const axios = require('axios');

export default class Profile extends Component {
    constructor() {
        super();
        //Set default message
        this.state = {
            message: 'Default Profile',
            FirstName: ''
        }
        this.additem = this.additem.bind(this);
        this.purchase = this.purchase.bind(this);
        this.logout = this.logout.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    logout() {
        axios.get("http://localhost:3000/users/logout")
    }

   purchase() {
        axios.get("http://localhost:3000/api/createorder", this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    } 

    additem() {
        axios.get("http://localhost:3000/api/additem", this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    } 


    componentDidMount() {
        //GET message from server using fetch api
        fetch('/api/profile')
            .then(res => res.text())
            .then(res => this.setState({ message: res }));
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.FirstName} to your profile!</h1>
                <p>{this.state.message}</p>
                <div>
                    <Link to={`/purchase`}><input type="submit" value="Purchase" className="button" onClick={this.purchase} /></Link>
                </div>
                <div>
                    <Link to={`/additem`}><input type="submit" value="AddItem" className="button" onClick={this.additem} /></Link>
                </div>
                <div>
                    <Link to={`/`}> <input type="submit" value="LogOut" className="button" onClick={this.logout} /></Link>
                </div>
            </div>
        );
    }
}