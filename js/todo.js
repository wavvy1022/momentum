const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos"

let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function todoSubmit(event) {
    event.preventDefault();

    const todoValue = todoInput.value;

    //todo input 초기화
    todoInput.value = "";

    const newTodoObj = {
        text : todoValue,
        id : Date.now()
    }

    //입력한 todo 배열에 저장
    toDos.push(newTodoObj);

    //리스트 출력 function 호출
    printTodo(newTodoObj)

    //localStorage 저장 funtion호출
    saveTodos();
}

//입력한 todo value 리스트에 출력 function
function printTodo(newTodo){

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    btn.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(btn)
    
    li.id = newTodo.id;
    span.innerText = newTodo.text;
    btn.innerText = "❌";

    btn.innerText
    //입력한 todo텍스트 localStorage에 저장

    todoList.prepend(li);
}

function deleteTodo(event){
    //삭제된 element 삭제
    const deleteElement = event.target.parentElement;
    deleteElement.remove();
    
    //localStorage에 있는 todo 리스트에서 삭제된 Id값과 같지 않은 todo리스트를 새로운 배열에 생성 후 toDos배열에 넣고 저장
    toDos = toDos.filter(toDo => toDo.id != parseInt(deleteElement.id));
    saveTodos();
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){

    const parseTodos = JSON.parse(savedTodos);
    //기존에 가지고있든 todos를 복원.
    toDos = parseTodos;

    //forEach에서 특정 함수를 호출할 경우 따로 변수를 전달하지 않아도
    //각 item을 해당 함수에 변수로 전달하도록 되어있음
    //parseTodos.forEach(printTodo);

    parseTodos.forEach(element => {
        printTodo(element);
    });
}


todoForm.addEventListener("submit", todoSubmit);