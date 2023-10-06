document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const searchInput = document.getElementById('searchInput');
    const controls = document.getElementById('controls');
    const counterEl = document.getElementById('counter');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const renderTodos = (filter = 'all') => {
        todoList.innerHTML = '';
        let filteredTodos = todos;

        switch (filter) {
            case 'active':
                filteredTodos = todos.filter(todo => !todo.completed);
                break;
            case 'completed':
                filteredTodos = todos.filter(todo => todo.completed);
                break;
        }

        filteredTodos.forEach(todo => {
            const todoEl = document.createElement('div');
            todoEl.classList.add('todo');
            if (todo.completed) {
                todoEl.classList.add('done');
            }

            const title = document.createElement('h3');
            title.innerText = todo.text;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
                  
const editButton = document.createElement("button");
editButton.innerText = "Edit";

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';

            todoEl.appendChild(title);
            todoEl.appendChild(checkbox);
            todoEl.appendChild(deleteBtn);
            todoEl.appendChild(editButton);
               todoList.appendChild(todoEl);
        });

        updateCounter();
    };

    const updateCounter = () => {
        const activeTodos = todos.filter(todo => !todo.completed).length;
        const completedTodos = todos.length - activeTodos;
        counterEl.innerText = `All: ${todos.length}, Active: ${activeTodos}, Completed: ${completedTodos}`;
    };

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        todos.push({
            text: todoInput.value,
            completed: false
        });
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        renderTodos();
    });

    todoList.addEventListener('click', (e) => {
        const todoEl = e.target.closest('.todo');
        const index = [...todoList.children].indexOf(todoEl);
        const todo = todos[index];

        if (e.target.type === 'checkbox') {
            todo.completed = e.target.checked;
            if (todo.completed) {
                todoEl.classList.add('done');
            } else {
                todoEl.classList.remove('done');
            }
        } else if (e.target.innerText === 'Delete') {
            todos.splice(index, 1);
            todoEl.remove();
        }else if(e.target.innerText === 'Edit') {
    const newText = prompt("Edit todo:", todos[index].text);
      if (newText) {
        todos[index].text = newText;
      }
              saveAndRenderTodos();

    }
  
        localStorage.setItem('todos', JSON.stringify(todos));
        updateCounter();
    });


  function saveAndRenderTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
  
    controls.addEventListener('click', (e) => 
    {
        if (e.target.id === 'showAll') {
            renderTodos('all');
        } else if (e.target.id === 'showActive') {
            renderTodos('active');
        } else if (e.target.id === 'showCompleted') {
            renderTodos('completed');
        }
    });

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        todos.forEach((todo, index) => {
            const todoEl = todoList.children[index];
            if (todo.text.toLowerCase().includes(term)) {
                todoEl.classList.remove('filtered');
            } else {
                todoEl.classList.add('filtered');
            }
        });
    });

    // Render todos when the page loads
    renderTodos();
});
