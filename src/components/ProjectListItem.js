import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';

class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.removeProject = this.removeProject.bind(this);
  }

  removeProject(projectId) {
    this.props.firestore.delete({ collection: 'projects', doc: projectId });
  }

  render() {
    const { project } = this.props;
    return (
      <ul>
        <li>Name: {project.name}</li>
        <button onClick={() => this.removeProject(project.id)}>Remove project</button>
      </ul>
    );
  }
}
export default firestoreConnect(['projects'])(ProjectListItem);
