const btn = document.querySelector("button");

let number = 1;

const addElement = function () {
    const li = document.createElement('li');
    document.querySelector('ul').appendChild(li);

    if (number % 3 == 0) {
        li.classList.add('active')
    }

    li.textContent = number;
    number += 2;
};

btn.addEventListener("click", addElement);