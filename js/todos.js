function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    //get the container
    const todoContainer = document.getElementById('todo-container');
for(const todo of todos){
    //create element
    const todoDiv = document.createElement('div');
    //set innerHtml
    todoDiv.innerHTML = `
    <h3>tittle: ${todo.title}</h3>
    <p>User : ${todo.userId}</p>
    <p>Is Completed: ${todo.completed}</p>
    
    `;
    //condition applied for complete
    //<p>Is Completed: ${todo.completed === true ? 'complete': 'not complete'}</p>


    todoContainer.appendChild(todoDiv);
}
}


loadTodos()