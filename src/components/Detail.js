import React, { Component } from 'react';

class Detail extends Component {
  constructor() {
    super()
    this.state = {
      item: this.props.location.state.item
    }
  }

  render() {
    return(
      <div>
        <span>aaa</span>
        <h1>{ this.state.item }</h1>
      </div>
    );
  }
}

export default Detail
