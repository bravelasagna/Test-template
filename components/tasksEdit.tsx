import { StrictMode, useState } from 'react';
import React = require('react');

export default function EditTasks({ onTaskSaved, existingTaskTitle }) {
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
      <input
        type="text"
        value={inputTextState}
        onChange={handleOnChange}
      ></input>
      <button onClick={saveClicked}>Save</button>
      <RenderValidation></RenderValidation>
    </div>
  );
}
