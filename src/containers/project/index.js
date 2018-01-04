import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../../components/ProjectList';
import { getAllProjects } from '../../actions/projects-actions';
import { bindActionCreators, compose } from 'redux';
import { show } from 'redux-modal';
import AddProjectModal from './AddProjectModal';
import { firestoreConnect } from 'react-redux-firebase';

class Project extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }

  openAddProjectModal = () => {
    this.props.show('addProject');
  };
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>Projects</h1>
        <button onClick={this.openAddProjectModal}>Add project</button>
        <ProjectList projects={projects} />
        <AddProjectModal name='addProject' />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects || []
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllProjects, show }, dispatch);

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps, mapDispatchToProps)
)(Project)