import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default (props) => {
  const { resetGame, screenMode } = props;
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {screenMode === 'desktop'
            ? <a href="/">{screenMode === 'desktop' ? 'Battleships React Application' : 'Battleships'}</a>
            : <a
              onClick={() => resetGame()}>{screenMode === 'desktop' ? 'Battleships React Application' : 'Battleships'}</a>
          }
        </Navbar.Brand>
      </Navbar.Header>
      {screenMode === 'desktop' &&
      <Nav pullRight>
        <NavItem onClick={() => resetGame()}>
          Restart
        </NavItem>
      </Nav>
      }
    </Navbar>
  )
}
