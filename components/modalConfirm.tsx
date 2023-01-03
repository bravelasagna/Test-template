import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class ModalConfirmParams {
  show: boolean;
  body: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ModalConfirm(params: ModalConfirmParams) {
  // params.show -> display the delete modal
  // params.body -> message in the body of the confirm modal


  const handleClose = () => {
    params.params.onClose();
  };

  const handleConfirm = () => {
    params.params.onConfirm();
  };

  return (
    <div>
      <Modal show={params.params.show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>{params.params.body}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
