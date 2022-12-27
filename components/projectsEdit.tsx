import { StrictMode, useState } from 'react';
import React = require('react');

export default function EditProjects({ onProjectSaved }) {
  const [inputTextState, setInputTextState] = useState('');
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

  function RenderValidation() {
    if (showValidationState) {
      return (<span>Inserire il nome progetto</span>);
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
