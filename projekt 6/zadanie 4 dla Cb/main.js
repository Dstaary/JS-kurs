const names = [];

const h1 = document.querySelector('h1');
const div = document.querySelector('div');

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newAdvice) {
                alert("Rada sie powtórzyła !");
                return;
            }
        }
        names.push(newAdvice);
        input.value = "";
    }
    div.textContent = "";
    h1.textContent = "";
}

document.getElementById('add').addEventListener('click', addAdvice);

const clearAdvice = (e) => {
    e.preventDefault();
    names.length = 0;
    h1.textContent = "";
    div.textContent = "";
}

document.getElementById('clean').addEventListener('click',clearAdvice);

const showAdvice = (e) => {
    e.preventDefault();
    const advice = Math.floor(Math.random() * names.length);
    h1.textContent = names[advice];
}

document.getElementById('showAdvice').addEventListener('click', showAdvice);

const showOptions = (e) => {
    e.preventDefault();
    div.textContent = `${names}, `;
}

document.getElementById('showOptions').addEventListener('click', showOptions);