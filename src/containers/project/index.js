import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { show } from 'redux-modal';
import { firestoreConnect } from 'react-redux-firebase';
import AddProjectModal from './AddProjectModal';
import ProjectTable from '../../components/ProjectTable';

class Project extends Component {
  openAddProjectModal = () => {
    this.props.show('addProject');
  };
  render() {
    const { projects, uid } = this.props;
    return (
      <div>
        <h1>Projects</h1>
        <ProjectTable projects={projects} />
        <Button bsStyle="primary" onClick={this.openAddProjectModal}>
          Add project
        </Button>
        <AddProjectModal uid={uid} name="addProject" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.firestore.ordered.projects || [],
  uid: state.firebase.auth.uid
});
const mapDispatchToProps = dispatch => bindActionCreators({ show }, dispatch);

export default compose(
  firestoreConnect(['projects']),
  connect(mapStateToProps, mapDispatchToProps)
)(Project);
