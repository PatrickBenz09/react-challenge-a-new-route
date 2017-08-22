import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import axios from 'axios';


class List extends Component {
  constructor() {
    super()
    this.state = {
      NasaData: []
    }
  }

  getNasa(event) {
    let self = this
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=nmy857JJ944aJxvHVQPJ6IJ2cMDUUv3761xblGS1')
    .then(resp => {
      let roverPhotos = resp.data.photos
      roverPhotos = roverPhotos.slice(3,24)
      // console.log(roverPhotos);
      self.setState({
        NasaData: roverPhotos
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log('Sudah Mounted');
    this.getNasa()
  }
  
  render() {
    return(
      <div>
        <div className="row">
          { this.state.NasaData.map((item, index) => {
              return(
                <div className="col">
                  <div className="card" style={ cardStyle }>
                    <img className="card-img-top" src={ item.img_src } alt="Card image cap" style={ cardImageStyle } />
                    <div className="card-body">
                      <h4 className="card-title">{ item.rover.name } Rover</h4>
                      <p className="card-text">Taken by { item.camera.name } Camera on { item.earth_date } rover status: { item.rover.status }</p>
                      <a className="btn btn-primary">
                        <Link to={{ 
                          pathname: `/detail/${ index }`,
                          state: { item: item }
                        }}>Fly me to the Mars~</Link>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const cardStyle = {
  height: '350px',
  width: '300px',
  margin: '15px'
}

const cardImageStyle = {
  maxHeight: '150px',
  maxWidth: '300px'
}

export default List;
