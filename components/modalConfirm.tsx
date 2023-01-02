import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalConfirm(showParam) {
  return (
    <div>
      <Modal show={showParam}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>

        <Modal.Body>kjlhljh</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">No</Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
