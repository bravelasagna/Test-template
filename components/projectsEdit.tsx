import { StrictMode, useState } from 'react';
import React = require('react');

export default function EditProjects({ onProjectSaved }) {
  const [inputTextState, setInputTextState] = useState('');

  function saveClicked() {
    onProjectSaved(inputTextState);
  }

  function handleOnChange(e) {
    setInputTextState(e.target.value);
  }

  return (
    <div>
      <input type="text" defaultValue={inputTextState} onChange={handleOnChange}></input>
      <button onClick={saveClicked}>Save</button>
    </div>
  )
}
