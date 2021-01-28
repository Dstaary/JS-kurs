let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

const changeColor = (e) => {
    if (e.keyCode === 38 && red < 255) {
        document.body.style.backgroundColor = `rgb(${red+= 5}, ${green+= 5}, ${blue+= 5})`
    } else if (e.keyCode === 40 && red > 0) {
        document.body.style.backgroundColor = `rgb(${red-= 5}, ${green-= 5}, ${blue-= 5})`
    }
    // 38 - strzałka do gory
    // 40 - strzałka w dół
}

window.addEventListener("keydown", changeColor);