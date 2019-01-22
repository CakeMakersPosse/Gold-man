import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor() {
    super();
    //Set default message
    this.state = {
      message: 'I am the add item page!'
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