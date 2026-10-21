// Load persistent todoList array from localStorage or default to initial values
const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

const listElement = document.querySelector('.js-todo-list');

// Function to render todo list HTML and sync state to localStorage
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];

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

// Initial render call on script load
renderTodoList();

function addToList() {
  const inputName = document.querySelector('.js-input-name');
  const inputDate = document.querySelector('.js-input-date');
  const name = inputName.value;
  const dueDate = inputDate.value;

  if (name !== '') {
    todoList.push({
      name,
      dueDate
    });

    // Save updated array to localStorage as a JSON string
    saveToStorage();

    renderTodoList();
    inputName.value = '';
    inputDate.value = '';
  }
}

function deleteEvent(id) {
  todoList.splice(id, 1);
  saveToStorage(); // Update localStorage on item deletion
  renderTodoList();
}

// Helper function to persist state
function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}