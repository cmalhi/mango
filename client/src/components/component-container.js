import React, { Component } from 'react';
import ImgCaption from './img-caption';
import Nav from './nav';
import Post from './post';
import Footer from './footer';

class Container extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default Container;
