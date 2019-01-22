import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'I am the purchase page!'
    }
  }
  render() {
    return (
      <div>
     <p>{this.state.message}</p>
     
      </div>
    );
  }
}