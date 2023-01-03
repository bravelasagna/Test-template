import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class ModalConfirmParams {
  show: boolean;
  body: string;
  onClose: void;
}

export default function ModalConfirm(params: ModalConfirmParams) {
  // params.show -> display the delete modal
  // params.body -> message in the body of the confirm modal
  console.log(params);

  return (
    <div>
      <Modal
        show={params.params.show}
        onHide={params.onClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>{params.body}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">No</Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
