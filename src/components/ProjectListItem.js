import React, { Component } from "react";

class ProjectListItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <ul>
        <li>{project.id}</li>
        <li>{project.name}</li>
      </ul>
    );
  }
}
export default ProjectListItem;
