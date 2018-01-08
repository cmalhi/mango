import React, { Component } from 'react';
import {Footer} from 'react-materialize';

class FooterComponent extends Component {
  render() {
    return (
      <Footer copyrights="&copy 2017 Copyright Text"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='footer grey darken-4'
      >
          <h5 className="white-text">Mango Review</h5>
          <p className="grey-text text-lighten-4">This is the footer content.</p>
      </Footer>
    );
  }
}

export default FooterComponent;
