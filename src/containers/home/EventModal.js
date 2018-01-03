import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import Datetime from 'react-datetime';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-datetime/css/react-datetime.css'

class ModalContent extends Component {
    static propTypes = {
        handleHide: PropTypes.func.isRequired,
        modalData: PropTypes.object.isRequired,
    };

    render() {
        const { show, handleHide, modalData } = this.props

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Start:</p>
                    <Datetime value={modalData.slotInfo.start} />
                    <p>End:</p>
                    <Datetime value={modalData.slotInfo.end} />
                    <p>Project:</p>
                    <Select
                        name="project"
                        onChange={this.handleChange}
                        valueKey="id"
                        labelKey="name"
                        options={modalData.projects}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleHide}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.handleSave}>Save</Button>
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


