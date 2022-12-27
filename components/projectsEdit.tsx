import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditProjects({
  onProjectSaved,
  existingProjectTitle,
  onClose,
}) {
  const [inputTextState, setInputTextState] = useState(existingProjectTitle);
  const [showValidationState, setShowValidationState] = useState(false);

  function saveClicked() {
    setShowValidationState(false);
    if (inputTextState == '') {
      setShowValidationState(true);
      return;
    }

    onProjectSaved(inputTextState);

    setInputTextState('');
  }

  function handleOnChange(e) {
    setInputTextState(e.target.value);
  }

  function handleClose() {
    onClose();
  }

  function RenderValidation() {
    if (showValidationState) {
      return <span>Inserire il nome progetto</span>;
    }
  }

  return (
    <div>
      <Modal show={true} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            value={inputTextState}
            onChange={handleOnChange}
          ></input>
          <RenderValidation></RenderValidation>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveClicked}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
