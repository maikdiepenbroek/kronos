import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Button, FormControl, Modal } from 'react-bootstrap';
import { connectModal, hide } from 'redux-modal';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    this.setState({ projectName: event.target.value });
  }

  static propTypes = {
    handleHide: PropTypes.func.isRequired
  };

  handleSave() {
    this.props.firestore.add('projects', {
      uid: this.props.uid,
      name: this.state.projectName
    });
    this.props.hide('addProject');
  }

  render() {
    const { show, handleHide } = this.props;

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add project</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormGroup>
            <label>Project name</label>
            <FormControl
              value={this.state.projectName}
              onChange={this.handleChange}
              placeholder="Project name"
            />
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleHide}>Cancel</Button>
          <Button bsStyle="primary" onClick={this.handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ hide }, dispatch);

export default compose(
  firestoreConnect(['projects']),
  connectModal({ name: 'addProject' }),
  connect(() => ({}), mapDispatchToProps)
)(AddProjectModal);
