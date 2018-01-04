import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
            <Link to="/">Kronos</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/" exact={true}>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem>Projects</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>

    <main className="container">
      <div className="row">
        <div className="col-12">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/projects" component={Project} />
        </div>
      </div>
    </main>
  </div>
);

export default App;
