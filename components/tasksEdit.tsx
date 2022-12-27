import { StrictMode, useState } from 'react';
import React = require('react');
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function EditTasks({ onTaskSaved, existingTaskTitle, onClose }) {
  const [inputTextState, setInputTextState] = useState(existingTaskTitle);
  const [showValidationState, setShowValidationState] = useState(false);

  function saveClicked() {
    setShowValidationState(false);
    if (inputTextState == '') {
      setShowValidationState(true);
      return;
    }

    onTaskSaved(inputTextState);

    setInputTextState('');
  }

  function handleClose() {
    onClose();
  }

  function handleOnChange(e) {
    setInputTextState(e.target.value);
  }

  function RenderValidation() {
    if (showValidationState) {
      return <span>Inserire il titolo del task</span>;
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
