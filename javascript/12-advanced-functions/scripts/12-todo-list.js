const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

const listElement = document.querySelector('.js-todo-list');

function renderTodoList() {
  let todoListHTML = '';

  // Use .forEach instead of a standard for loop
  todoList.forEach((todoObject) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div> 
      <button class="js-delete delete-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });

  listElement.innerHTML = todoListHTML;
  
  // Attach event listeners dynamically to all delete buttons using querySelectorAll and Closures
  document.querySelectorAll('.js-delete')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        deleteEvent(index);
      });
    });
}

renderTodoList();

// Attach Add button click listener
document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addToList();
  });

function addToList() {
  const inputName = document.querySelector('.js-input-name');
  const inputDate = document.querySelector('.js-input-date');
  const name = inputName.value;
  const dueDate = inputDate.value;

  if (name !== '') {
    todoList.push({ name, dueDate });
    saveToStorage();
    renderTodoList();
    inputName.value = '';
    inputDate.value = '';
  }
}

function deleteEvent(id) {
  todoList.splice(id, 1);
  saveToStorage();
  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}