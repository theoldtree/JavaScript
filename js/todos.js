const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function itemFilter(){

}

function deleteToDo(event){
    console.dir(event.target.parentElement)
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    const todo = span.innerText;
    li.remove();
    console.log(todo);
    const newArr = toDos.filter((item)=>{
        console.log(item);
        console.log(item === todo);
        return !(item === todo); 
    })
    toDos = newArr;
    saveToDos();
    console.log(newArr)
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,toDos)
}

function paintTodo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = todo;
    toDoList.appendChild(li);
}

function onSubmit(event){
    event.preventDefault();
    const todo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(todo);
    paintTodo(todo);
    saveToDos();
}

toDoForm.addEventListener("submit",onSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = savedToDos.split(",");
    parsedToDos.forEach((item) => {
        paintTodo(item)
        toDos.push(item)
    })
}
