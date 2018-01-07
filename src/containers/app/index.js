import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from '../home';
import LoginPage from '../login/LoginPage';
import LoginMenuItem from '../login/LoginMenuItem';
import Report from '../report';
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
            <LinkContainer to="/reports">
              <NavItem>Reports</NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem>Projects</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LoginMenuItem />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>

    <main className="container">
      <div className="row">
        <div className="col-12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/reports" component={Report} />
            <Route path="/projects" component={Project} />
          </Switch>
        </div>
      </div>
    </main>
  </div>
);

export default App;
