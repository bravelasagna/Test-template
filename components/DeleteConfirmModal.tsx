import * as React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function DeleteConfirmModal({ showModal, onCancel, onConfirm }) {
  return (
    <div>
      <Modal show={showModal} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
