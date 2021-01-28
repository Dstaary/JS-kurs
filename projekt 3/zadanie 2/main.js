let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.textContent = "Dodaj 10 elementów do litsty"
    document.body.appendChild(btn);

    const btnReset = document.createElement("button");
    btnReset.textContent = "Clean"
    document.body.appendChild(btnReset);

    const ulList = document.createElement('ul');
    document.body.appendChild(ulList);

    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", clean);
}

const createLiElements = () => {
    const ul = document.body.querySelector('ul');
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`;
        document.body.appendChild(li)
        li.style.fontSize = `${size++}px`
        li.style.listStyle = "none";
        ul.appendChild(li);
    }
}

const clean = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init()