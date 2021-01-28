const input = document.querySelector('input');
const ul = document.querySelector('ul.tasks');
const liElements = document.querySelectorAll('li.search');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
}


input.addEventListener('input', searchTask);
