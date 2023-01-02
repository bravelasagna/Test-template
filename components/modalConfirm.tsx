import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalConfirm(params) {
  // params.show -> display the delete modal
  // params.body -> message in the body of the confirm modal

  return (
    <div>
      <Modal show={params.show} onHide={params.onClose} animation={false}>
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
