import React, { Component } from "react";
import ProjectListItem from "./ProjectListItem";
class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        {projects.map(project => <ProjectListItem key={project.id} project={project} />)}
      </div>
    );
  }
}
export default ProjectList;
