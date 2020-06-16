import React, { Component } from 'react';
//because it is set as main in package.json it goes to Tour.js
import Tour from '../Tour';
import './TourList.scss';

export default class index extends Component {
  render() {
    return (
      <div>
        Hi from TourList
        <Tour />
      </div>
    )
  }
}
