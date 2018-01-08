import React, { Component } from 'react';
import {Col, Card, Parallax} from 'react-materialize';

class Post extends Component {
  render() {
    return (
      <div>
        <Parallax imageSrc="/images/closeup.jpg"/>
        <div className="section white">
          <div className="row container">
            <h2 className="header">In the box</h2>
            <p className="grey-text text-darken-3 lighten-3">
            Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
            labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
            sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
            background content or image in this case, is moved at a different speed than the 
            foreground content while scrolling.
            Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
            labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
            sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
            background content or image in this case, is moved at a different speed than the 
            foreground content while scrolling.</p>
          </div>
        </div>
        <Parallax imageSrc="/images/box.jpg"/>
        <div className="row container">
          <h2 className="header">Up Close</h2>
          <p className="grey-text text-darken-3 lighten-3">
          Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
          labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
          sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
          background content or image in this case, is moved at a different speed than the 
          foreground content while scrolling.
          Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
          labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
          sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
          background content or image in this case, is moved at a different speed than the 
          foreground content while scrolling.
          Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
          labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
          sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
          background content or image in this case, is moved at a different speed than the 
          foreground content while scrolling.
          Qui pariatur et ut eiusmod in velit commodo elit et nulla. Adipisicing labore sint 
          labore id labore deserunt incididunt dolore eiusmod magna labore dolor in dolore elit 
          sed anim dolore occaecat eu occaecat adipisicing. Parallax is an effect where the 
          background content or image in this case, is moved at a different speed than the 
          foreground content while scrolling.</p>
        </div>
      </div>
    );
  }
}

export default Post;
