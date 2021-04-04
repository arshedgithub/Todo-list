const list = document.querySelector(".todos");
const addTodo = document.querySelector(".add");
const trash = document.querySelector(".delete");

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        generateTodo(todo);  // adding todos
        addTodo.reset();     // reset the input field
    }
})

// adding todos
generateTodo = todo => {
    list.innerHTML += `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;
}

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})