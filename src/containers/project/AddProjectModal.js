import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { connectModal, hide } from 'redux-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewProject } from '../../actions/projects-actions';

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
    this.props.addNewProject(this.state.projectName);
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
          <label>Project name</label>
          <input
            type="text"
            value={this.state.projectName}
            onChange={this.handleChange}
            placeholder="Project name"
          />
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

const mapDispatchToProps = dispatch => bindActionCreators({ hide, addNewProject }, dispatch);
AddProjectModal = connect(() => ({}), mapDispatchToProps)(AddProjectModal);
export default connectModal({ name: 'addProject' })(AddProjectModal);
