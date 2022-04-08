const addTodo = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

// Add todos
const generateTodo = (todo) => {
    const html = `
     <li>
         <span>${todo}</span>
         <div class="cta">
            <input type="checkbox" class="checkbox">
            <i class=" delete fa-solid fa-trash-can"></i>
         </div>
      </li>
    `;
    //console.log(html);
    todos.innerHTML += html;
};

addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();

    if(todo.length){
        generateTodo(todo);
        addTodo.reset();
    }
})

// Delete todos 
todos.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
    }
});

// Mark todos 

todos.addEventListener('click', (e) => {

    const span = Array.from(e.target.parentElement.parentElement.children)[0];

    if(e.target.classList.contains('checkbox')){
        span.classList.toggle('line-through');
    }

});

// Search todos 

const filterTodos = (key) => {
    //add filtered class
    Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(key))
    .forEach(todo => todo.classList.add('filtered'));

    //remove filtered class
    Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(key))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const key= search.value.trim().toLowerCase();
    filterTodos(key);
});
