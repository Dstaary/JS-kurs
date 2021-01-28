const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value.trim();
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("Nazwa sie powtórzyła !");
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = "";
    }
}

document.querySelector('button').addEventListener('click', addName);