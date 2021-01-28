const form = document.querySelector('form');
const ulAdd = document.querySelector('ul.add');
const taskNumber = document.querySelector('h3 span');
const listItems = document.getElementsByClassName('task');
const inputAdd = document.querySelector('input.add')

const toDoList = [];


const removeAddTask = (e) => {
    const index = e.target.parentNode.id.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = listItems.length;

    ulAdd.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.id = key;
        ulAdd.appendChild(toDoElement)
    })
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if(titleTask === "") return; 
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>Usun</button>";

    toDoList.push(task)
    ulAdd.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.id = key;
        ulAdd.appendChild(toDoElement)
    })

    ulAdd.appendChild(task);
    inputAdd.value = "";

    taskNumber.textContent = listItems.length;

    task.querySelector('button').addEventListener
    ('click', removeAddTask)
}

form.addEventListener('submit', addTask)
