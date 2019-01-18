import React, { Component } from 'react';
import { PostData } from './PostData';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    constructor() {
      super();
      //Set default message
      this.state = {
        message: 'Default Profile',
        FirstName: ''
      }
        this.purchase = this.purchase.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    purchase() {
        PostData('purchase', this.state).then((result) => {
            let responseJSON = result;
            console.log(responseJSON);
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    componentDidMount() {
      //GET message from server using fetch api
      fetch('/api/profile')
        .then(res => res.text())
        .then(res => this.setState({message: res}));
    }
    render() {
      return (
        <div>
          <h1>Welcome {this.state.FirstName} to your profile!</h1>
          <p>{this.state.message}</p>
            <div>
                <Link to = {`/purchase`}><input type="submit" value="Purchase" className="button" onClick={this.purchase} /></Link>
            </div>
            <div>
                <Link to = {`/home`}><input type="submit" value="LogOut" className="button" onClick={this.logout} /></Link>
            </div>
        </div>
      );
    }
  }