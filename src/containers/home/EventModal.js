import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class ModalContent extends Component {
    static propTypes = {
        handleHide: PropTypes.func.isRequired,
        slotInfo: PropTypes.object.isRequired,
    };

    render() {
        const { show, handleHide, slotInfo } = this.props

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add event</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Start: {slotInfo.start.toLocaleString()}</p>
                    <p>End: {slotInfo.end.toLocaleString()}</p>
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
        const { name, slotInfo } = this.props
        const WrappedModal = connectModal({ name, slotInfo })(ModalContent)
        return <WrappedModal />
    }
}
