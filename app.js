const list = document.querySelector(".todos");
const addTodo = document.querySelector(".add");
const trash = document.querySelector(".delete");
const search = document.querySelector(".search input");

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        generateTodo(todo);  // adding todos
        addTodo.reset();     // reset the input field
    }
});

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// search bar
search.addEventListener('keyup', () => {
    const key = search.value.trim();
    filterTodos(key);
    
});
    
// adding todos
const generateTodo = todo => {
    list.innerHTML += `
        <li class="list-group-item text-light d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
        </li>`;
};

const filterTodos = key => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(key))
        .forEach(todo => todo.classList.add("filtered"));

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(key))
        .forEach(todo => todo.classList.remove("filtered"));
}
    