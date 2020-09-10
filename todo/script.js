const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')
// get todos from local storage
const todos = JSON.parse(localStorage.getItem('todos'));

// looping todos from local storage
if (todos) {
  todos.forEach(todo => {
    addTodo(todo)
  })
}
// submit todo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
})

// add new todo
function addTodo(todo) {
  let todoText = input.value

  if(todo) {
    todoText = todo.text
  }

  if(todoText) {
    const todoEl = document.createElement('li');
    if(todo && todo.completed) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText;
    
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS()
    })

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todoEl.remove()
      updateLS()
    })
    
    todosUl.appendChild(todoEl);

    input.value = '';

    updateLS()
  }
}

// update to local storage
function updateLS() {
  const todoEls = document.querySelectorAll('li');

  const todos = [];

  todoEls.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}
