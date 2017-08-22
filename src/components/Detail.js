import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props.location.state.item
    }
  }

  render() {
    console.log(this.state.item)
    let item = this.state.item
    return(
      <div>
        <div className="col">
          <div className="card" style={ cardStyle }>
            <img className="card-img-top" src={ item.img_src } alt="Card image cap" style={ cardImageStyle } />
            <div className="card-body">
              <h4 className="card-title">{ item.rover.name } Rover</h4>
              <p className="card-text">Taken by { item.camera.name } Camera on { item.earth_date } rover status: { item.rover.status }</p>
              <a className="btn btn-primary">
                <Link to={{ 
                  pathname: `/`,
                }} style={ whiteText }>Back~</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const cardStyle = {
  height: '300px',
  maxWidth: '400px'
}

const cardImageStyle = {
  height: '300px',
  maxWidth: '800px'
}

const whiteText = {
  color: 'white'
}

export default Detail
