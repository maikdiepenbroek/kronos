import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../../components/ProjectList';
import { bindActionCreators, compose } from 'redux';
import { show } from 'redux-modal';
import AddProjectModal from './AddProjectModal';
import { firestoreConnect } from 'react-redux-firebase';

class Project extends Component {
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
  bindActionCreators({ show }, dispatch);

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps, mapDispatchToProps)
)(Project)