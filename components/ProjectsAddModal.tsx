import * as React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ProjectsAddModal({
  showModal,
  onProjectAdd,
  txtTitle,
  onTxtTitleChange,
  onCancel,
}) {
  return (
    <div>
      <Modal show={showModal} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            defaultValue={txtTitle}
            onChange={onTxtTitleChange}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onProjectAdd}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
