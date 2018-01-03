import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Project from '../project'
import './index.css'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Project} />
    </main>
  </div>
)

export default App