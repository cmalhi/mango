import React, { Component } from 'react';
import ImgCaption from './img-caption';
import Nav from './nav';
import Preview from './nav';


import Footer from './footer';

class Container extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Preview />
        <Footer />
      </div>
    );
  }
}

export default Container;
