import * as React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function TasksEditModal({
  onTaskSave,
  txtTitle,
  onCancel,
  mode,
  onDelete,
  openModalRef,
  task,
}) {
  // state for this components
  const [display, setDisplay] = useState(false);
  const [txtTitleValidationClass, setTxtTitleValidationClass] =
    useState('invalid-feedback');

  // linking refer functions; these will be triggered from the parent components
  React.useEffect(() => {
    openModalRef.current = openModal;
  }, []);

  let modalTitle = 'Add New Task';
  let showDeleteButton = false;
  if (mode == 'edit') {
    modalTitle = 'Edit Task';
    showDeleteButton = true;
  }

  // displays the modal window and resets it's content
  function openModal() {
    resetContent();
    setDisplay(true);
  }

  // clears content of the modal
  function resetContent() {
    setTxtTitleValidationClass('invalid-feedback');
  }

  // hide modal
  function hideModal() {
    setDisplay(false);
  }

  // handles input changes and updates the task object
  function onTxtTitleChange(e) {
    task.title = e.target.value;
  }

  // validates user input and trigger the save events
  function onSaveClick() {
    // starts validation
    setTxtTitleValidationClass('invalid-feedback');
    if (task.title == '') {
      setTxtTitleValidationClass('invalid-feedback d-block');
      return;
    }

    // builds the task entity or updates the existing one
    console.log(task.title);

    onTaskSave();
  }

  return (
    <div>
      <Modal show={display} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="form-label">Task Title</label>
          <input
            className="form-control"
            type="text"
            defaultValue={task.title}
            onChange={onTxtTitleChange}
          ></input>
          <div className={txtTitleValidationClass}>
            Please fill out this field.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onDelete} hidden={!showDeleteButton}>
            Delete
          </button>
          <button onClick={hideModal}>Cancel</button>
          <button onClick={onSaveClick}>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
