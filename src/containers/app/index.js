import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import Home from '../home';
import LoginPage from '../login/LoginPage';
import Project from '../project';
import './index.css';

const App = () => (
  <div>
    <header>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Kronos</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/projects">Projects</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/login">Login</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/projects" component={Project} />
    </main>
  </div>
);

export default App;
