import React, { Component } from 'react';
//because it is set as main in package.json it goes to Tour.js
import Tour from '../Tour';
import './TourList.scss';
import {tourData} from '../../tourData';

export default class index extends Component {
  state = {
    tours: tourData
  }

  removeTour = id =>{
    console.log(id);
    
  }
  render() {
    // console.log(this.state.tours);
    const {tours} = this.state;
    return (
      <section className="tourList">
        {
          tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour} ></Tour>))
        }
      </section>
    )
  }
}
