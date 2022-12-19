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
  function addToDoItem() {
    setTodoItemSelected({});
    showHideComponents('edit');
  }

  function editGoBackClick() {
    showHideComponents('list');
  }

  function saveClick() {
    setToDoItems((todoItems) => [...todoItems, todoItemSelected]);
    editGoBackClick();
  }

  const handleChangeItemId = (event) => {
    todoItemSelected.id = event.target.value;
    setTodoItemSelected(todoItemSelected);
  };

  const handleChangeItemDescription = (event) => {
    todoItemSelected.description = event.target.value;
    setTodoItemSelected(todoItemSelected);
  };

  function deleteClick() {
    let filteredToDoItemsList = todoItems.filter(
      (item) => item.id !== todoItemSelected.id
    );
    setToDoItems(filteredToDoItemsList);
    editGoBackClick();
  }

  // var filteredArray = arr.filter(e => e !== 'seven')

  return (
    <div>
      {displayMode == 'list' && (
        <div>
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
          <button onClick={() => addToDoItem()}>Add new</button>
        </div>
      )}
      {displayMode == 'edit' && (
        <div>
          <input
            type="text"
            defaultValue={todoItemSelected.id}
            onChange={handleChangeItemId}
          ></input>
          <input
            type="text"
            defaultValue={todoItemSelected.description}
            onChange={handleChangeItemDescription}
          ></input>
          <button onClick={() => saveClick()}>Save</button>
          <button onClick={() => deleteClick()}>Delete</button>
          <button onClick={() => editGoBackClick()}>Back</button>
        </div>
      )}
    </div>
  );
}
