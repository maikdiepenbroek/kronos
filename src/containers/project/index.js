import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectList from "../../components/ProjectList";
import { getAllProjects } from "../../actions/projects-actions";
import { bindActionCreators } from "redux";

class Project extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>Projects</h1>
        <ProjectList projects={projects} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllProjects
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);
