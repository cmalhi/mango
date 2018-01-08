import React, { Component } from 'react';
import {Navbar, NavItem, Dropdown, Button} from 'react-materialize';

class Nav extends Component {
  render() {
    return (
      <Navbar brand='Mango Review' className="nav amber darken-2" right>
        <NavItem href='/reviews' >Reviews</NavItem>
        <NavItem href='/about'>About</NavItem>
        <Dropdown 
          options={{
            hover: true, 
            belowOrigin: false,
            inDuration: 150, 
            outDuration: 150
          }}
          trigger={
            <Button>Drop me!</Button>
          }>
          <NavItem>one</NavItem>
          <NavItem>two</NavItem>
          <NavItem divider />
          <NavItem>three</NavItem>
        </Dropdown>
      </Navbar>
    );
  }
}

export default Nav;
