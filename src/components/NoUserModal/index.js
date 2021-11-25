import { Modal } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const NoUserModal = ({showModal}) => {
    const [show, setShow] = useState(showModal);

    const handleClose = () => setShow(false);
    return(
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
    )
}


export default NoUserModal;