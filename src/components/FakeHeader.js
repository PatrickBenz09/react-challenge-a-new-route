import React, { Component } from 'react'

class FakeHeader extends Component {
  render() {
    return(
      <div className="App-header">
        <div className="starwars-demo">
          <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" style={ starStyle } />
          <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" style={ warsStyle } />
          <h2 style={ bylineSpan, byline }>The Fake Awakens</h2>
        </div>
      </div>
    );
  }
}

/* Animation properties */
const starStyle = {
  animation: "star 10s ease-out infinite"
}
const warsStyle = {
  animation: "wars 10s ease-out infinite"
}
const bylineSpan = {
  animation: "spin-letters 10s linear infinite"
}
const byline = {
  animation: "move-byline 10s linear infinite"
}

export default FakeHeader
