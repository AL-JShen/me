import React, { Component } from 'react';
import './App.css';

export default class Media extends Component {
  render() {
    return (
      <div className='media'>
        Here are a few images of Norway. 
        <img src='https://res-1.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_280,q_64,w_560/v1/clients/norway/unesco-geirangerfjord-skagefla-waterfall-2-1_6cc6a64a-a204-432e-8753-01ef2080f24e.jpg' />
        <img src='http://louisianaconsularcorps.com/wp-content/gallery/norway/norway-1.jpg' />
        <img src='http://www.clorith.net/wp-content/uploads/2015/03/Lofoten-Norway-Northern-Lights-13.jpg' />
      </div>
    );
  }
}

