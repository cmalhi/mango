import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';

class ImgCaption extends Component {
  render() {
    return (
      <Card className='small'
        header={<CardTitle image='images/forest.jpg'>Card Title</CardTitle>}>
        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
      </Card>
    );
  }
}

export default ImgCaption;
