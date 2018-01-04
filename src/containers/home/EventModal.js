import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Button, ControlLabel, Modal } from 'react-bootstrap'
import { connectModal, hide } from 'redux-modal';
import Datetime from 'react-datetime';
import Select from 'react-select';
import moment from 'moment';
import NumericInput from "react-numeric-input";
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import 'react-select/dist/react-select.css';
import 'react-datetime/css/react-datetime.css'

class EventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.slotInfo.project,
            start: moment(props.slotInfo.start),
            end: moment(props.slotInfo.end),
            km: 0,
        };
        this.handleProjectChange = this.handleProjectChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    static propTypes = {
        handleHide: PropTypes.func.isRequired,
        slotInfo: PropTypes.object.isRequired,
    };

    handleProjectChange = (selectedOption) => {
        this.setState({ project: selectedOption });
    }

    handleStartChange = (moment) => {
        this.setState({ start: moment });
    }

    handleEndChange = (moment) => {
        this.setState({ end: moment });
    }

    handleKmChange = (newKm) => {
        this.setState({ km: newKm });
    }

    handleSave() {
        this.props.firestore.add('events', {
            title: this.state.project.name,
            start: this.state.start.toDate(),
            end: this.state.end.toDate(),
            project: this.state.project,
            km: this.state.km
        });
        this.props.hide('event');
    }

    render() {
        const { show, handleHide, projects, events } = this.props
        const isFormValid = this.state.start.isBefore(this.state.end) && this.state.project !== '' && this.state.km >= 0;
        const addOrEdit = (this.props.slotInfo.project !== undefined) ? 'Edit' : 'Add';

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{addOrEdit} event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup>
                        <ControlLabel>Start</ControlLabel>
                        <Datetime
                            value={this.state.start}
                            onChange={this.handleStartChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>End</ControlLabel>
                        <Datetime
                            value={this.state.end}
                            onChange={this.handleEndChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Project</ControlLabel>
                        <Select
                            name="project"
                            value={this.state.project}
                            onChange={this.handleProjectChange}
                            valueKey="id"
                            labelKey="name"
                            options={projects}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Kilometer registration</ControlLabel>
                        <NumericInput min={0} value={this.state.km} onChange={this.handleKmChange} className="form-control" />
                    </FormGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleHide}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.handleSave} disabled={!isFormValid}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.firestore.ordered.projects || []
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ hide }, dispatch);

export default compose(
    firestoreConnect(['projects', 'events']),
    connectModal({ name: 'event' }),
    connect(mapStateToProps, mapDispatchToProps)
)(EventModal)