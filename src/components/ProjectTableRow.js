import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { firestoreConnect } from 'react-redux-firebase';

class ProjectTableRow extends Component {
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

      <tr>
        <td>{project.name}</td>
        <td><Button bsStyle="danger" onClick={() => this.removeProject(project.id)}>Remove project</Button></td>
      </tr>
    );
  }
}
export default firestoreConnect(['projects'])(ProjectTableRow);
