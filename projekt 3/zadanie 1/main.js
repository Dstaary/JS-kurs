const btn = document.querySelector('button');
const li = document.querySelectorAll('li');

let size = 10;

btn.addEventListener("click", function () {
    for (let i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = `${size}px`;;
    }
    size++
})