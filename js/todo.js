//fetch the json data
function loadTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
}

function displayTodo(todos) {
  //get the todo list container
  let todoList = document.getElementById("todo-list");
  for (let todo of todos) {
    let todoItem = document.createElement("todo-list");
    //create class in todo item
    todoItem.classList.add("todo-item");
    //set inner HTML or innerText
    todoItem.innerHTML = `
        <h4>Id : ${todo.id}</h4>
        <p>isCompleted: ${
          todo.completed === true ? "completed" : "incomplete"
        }</p>
        <p>Title : ${todo.title}</p>`;
    //append Child
    todoList.appendChild(todoItem);
  }
}
//call the loadTodo function
loadTodo();
