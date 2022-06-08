
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos array를 localStorage에 집어넣는것, string의 형식으로
}

function deleteToDo(event){
    const li = event.target.parentElement; // 어느 리스트를 제거할지 선택해줌
    li.remove(); // 그리고 제거함
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; // span안에 저장했던 newTodo값을 넣어준다
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // span을 li 안으로 넣어준다
    li.appendChild(button);
    toDoList.appendChild(li); // li를 보여주게 한다
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // 지워지기전에 저장하는 newTodo 값
    toDoInput.value = ""; // 엔터를 치면 지워지게 한다
    toDos.push(newTodo); // 새로고침하면 지워지는것을 막기위해 toDos배열에 저장해둔다
    paintToDo(newTodo); // 화면에 newTodo를 보여준다
}


toDoForm.addEventListener("submit", handleToDoSubmit);




const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos); // string을 array로 바꿈
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // array의 각 item에 대해 function을 실행함, =>가 함수를 대신함
}