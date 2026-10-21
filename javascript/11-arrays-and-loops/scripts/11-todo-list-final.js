// Store todos as an array of objects containing name and dueDate
const todoList = [{
  name: 'Study CSS',
  dueDate: '2026-10-20'
}, {
  name: 'Study JS',
  dueDate: '2026-10-21'
}];

const listElement = document.querySelector('.js-todo-list');

// Accumulator pattern to construct dynamic HTML string
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    // Object Destructuring shorthand
    const { name, dueDate } = todoList[i];

    // Split each todo item into 3 distinct grid items (Name, Date, Delete Button)
    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button 
        class="js-delete delete-button" 
        onclick="deleteEvent(${i});"
      >
        Delete
      </button>
    `;
    todoListHTML += html;
  }

  listElement.innerHTML = todoListHTML;
}

// Initial render call on page load
renderTodoList();

function addToList() {
  const inputName = document.querySelector('.js-input-name');
  const inputDate = document.querySelector('.js-input-date');
  const name = inputName.value;
  const dueDate = inputDate.value;

  if (name !== '') {
    // Shorthand property notation
    todoList.push({
      name,
      dueDate
    });

    renderTodoList(); // Re-render UI list
    inputName.value = '';
    inputDate.value = '';
  }
}

function deleteEvent(id) {
  todoList.splice(id, 1);
  renderTodoList(); // Re-render UI list after deletion
}