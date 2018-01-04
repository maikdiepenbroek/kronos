import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Datetime from 'react-datetime';
import Select from 'react-select';
import moment from 'moment';
import NumericInput from "react-numeric-input";
import 'react-select/dist/react-select.css';
import 'react-datetime/css/react-datetime.css'

class ModalContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectId: '',
            start: moment(props.modalData.slotInfo.start),
            end: moment(props.modalData.slotInfo.end),
            km: 0,
        };
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    static propTypes = {
        handleHide: PropTypes.func.isRequired,
        modalData: PropTypes.object.isRequired,
    };
    
    handleProjectChange = (selectedOption) => {
        this.setState({ projectId: selectedOption });
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

    render() {
        const { show, handleHide, modalData } = this.props
        const isFormValid = this.state.start.isBefore(this.state.end) && this.state.projectId !== '' && this.state.km >= 0;

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Start:</p>
                    <Datetime
                        value={this.state.start}
                        onChange={this.handleStartChange}
                    />
                    <p>End:</p>
                    <Datetime
                        value={this.state.end}
                        onChange={this.handleEndChange}
                    />
                    <p>Project:</p>
                    <Select
                        name="project"
                        value={this.state.projectId}
                        onChange={this.handleProjectChange}
                        valueKey="id"
                        labelKey="name"
                        options={modalData.projects}
                    />
                    <p>Kilometer registration</p>
                    <NumericInput min={0} value={this.state.km} onChange={this.handleKmChange} className="form-control"/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleHide}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.handleSave} disabled={!isFormValid}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default class EventModal extends Component {
    render() {
        const { name, modalData } = this.props
        const WrappedModal = connectModal({ name, modalData })(ModalContent)
        return <WrappedModal />
    }
}


