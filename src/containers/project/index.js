import React from 'react';
import { connect } from "react-redux";
import ProjectList from '../../components/ProjectList';

const Project = () => (
  <div>
    <h1>Projects</h1>
    <ProjectList></ProjectList>
  </div>
);

export default connect()(Project);
