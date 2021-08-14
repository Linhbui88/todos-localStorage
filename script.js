// // localStorage.setItem('myName', 'Linh')
// // localStorage.setItem('petName', 'Yonna')
// // localStorage.setItem('petAge', 1)

// // localStorage.setItem('petAge',2)
// var myName=localStorage.getItem('myName')
// var petName= localStorage.getItem('petName')
// var petAge= localStorage.getItem('petAge')

// var myArray =[1,2,3,4]
// var myOject= { name: 'Linh', hasPet: true}

// localStorage.setItem(myArray,JSON.stringify(myArray))

// console.log(JSON.stringify(myArray))
// console.log(JSON.stringify(myOject))



//sellect DOM elements

var newTodoForm = document.getElementById('new-todo-form')

var newTodoInput =  document.getElementById('new-todo')

var todosList =  document.getElementById('todos-list')
var todos =  JSON.parse(localStorage.getItem('todos')) || []
console.log(todos)

function renderTodos() {
    todosList.innerHTML =''
    for( var i =0; i < todos.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('data-index', i)
        li.innerText = todos[i]
        var button = document.createElement('button')
        button.innerText = '&#10004;'
        li.appendChild('button')
        todosList.appendChild(li)
    }
}

function addTodo(event) {
    event.preventDefault()
    var newTodoText = newTodoInput.value
    todos.push(newTodoText)
    localStorage.setItem('todos', JSON.stringify(todos))
    newTodoInput.value = ''
    renderTodos()
}
function removeTodo(event){
console.log(event.target.tagName)
if (event.target.tagName === 'BUTTON') {
    var inx = event.target.parentElement.getAttribute('data-index')
    todos.splice(idx, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()
}
}
newTodoForm.addEventListener('submit', addTodo)
renderTodos()
todosList.addEventListener('click',removeTodo)
