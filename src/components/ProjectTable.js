import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import ProjectTableRow from "./ProjectTableRow";

class ProjectTable extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => <ProjectTableRow key={project.id} project={project} />)}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ProjectTable;
