import * as React from 'react';
import { useState } from 'react';
import './../style.css';

export default function ToDoList() {
  const initToDoItems = [
    { id: 1, description: 'bread' },
    { id: 2, description: 'milk' },
    { id: 3, description: 'water' },
  ];

  const [displayMode, setDisplayMode] = useState('list');
  const [todoItems, setToDoItems] = useState(initToDoItems);
  const [todoItemSelected, setTodoItemSelected] = useState(null);

  function showHideComponents(param) {
    setDisplayMode(param);
  }

  function editToDoItem(param) {
    setTodoItemSelected(param);
    showHideComponents('edit');
  }

  function editGoBackClick() {
    showHideComponents('list');
  }

  return (
    <div>
      {displayMode == 'list' && (
        <table>
          {todoItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>
                <a onClick={() => editToDoItem(item)}>Edit</a>
              </td>
            </tr>
          ))}
        </table>
      )}
      {displayMode == 'edit' && (
        <div>
          <input type="text" defaultValue={todoItemSelected.id}></input>
          <input type="text" defaultValue={todoItemSelected.description}></input>
          <button onClick={() => editGoBackClick()}>Back</button>
        </div>
      )}
    </div>
  );
}
