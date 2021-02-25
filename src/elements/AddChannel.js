import React from 'react';
import Modal from 'react-bootstrap/Modal';

const AddChannel = (props) => {

    return (
        <Modal
        show={props.create}
        onHide={() => props.setCreate(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Please enter the name of a new channel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <input type="text" onSubmit={props.handleSubmit} />
          </form>
        </Modal.Body>
      </Modal>
    )
}

export default AddChannel;
