import * as React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function TasksAddModal({
  showModal,
  onTaskAdd,
  txtTitle,
  onTxtTitleChange,
  onCancel,
}) {
  return (
    <div>
      <Modal show={showModal} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
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
          <button onClick={onTaskAdd}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
