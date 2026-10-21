const todoList = ['make dinner', 'wash dishes'];

// --- Todo List Practice 1 ---
function addToList() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  if (name !== '') {
    todoList.push(name);
    console.log('Updated Array (Practice 1):', todoList);
    inputElement.value = '';
  }
}

function ifEnterKeyDown(event) {
  if (event.key === 'Enter') {
    addToList();
  }
}

// --- Todo List Practice 2 (HTML Generation) ---
const listElement = document.querySelector('.js-todo-list');

// Accumulator pattern applied to build HTML string
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const work = todoList[i];
    const html = `<p>${work}</p>`;
    todoListHTML += html;
  }

  listElement.innerHTML = todoListHTML;
}

// Initial render call on script load
renderTodoList();

function addToList2() {
  const inputElement = document.querySelector('.js-input-2');
  const name = inputElement.value;

  if (name !== '') {
    todoList.push(name);
    renderTodoList(); // Re-render updated UI list
    inputElement.value = '';
  }
}

function ifEnterKeyDown2(event) {
  if (event.key === 'Enter') {
    addToList2();
  }
}