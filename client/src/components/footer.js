import React, { Component } from 'react';
import {Footer} from 'react-materialize';

class FooterComponent extends Component {
  render() {
    return (
      <Footer copyrights="© 2018 Mango Review, All rights reserved"
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More info</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">About</a></li>>
          </ul>
        }
        className='footer grey darken-4'
      >
          <h5 className="white-text">Mango Review</h5>
          <p className="grey-text text-lighten-4">Honest Reviews</p>
      </Footer>
    );
  }
}

export default FooterComponent;
