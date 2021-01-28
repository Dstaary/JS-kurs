// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Front-end developerem', 'DTP Designerem', 'Freelancerem']

let activeLetter = -15;
let activeText = 0;

// Implementacja
const addLetter = () => {
if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
 
}
 activeLetter++;
if(activeLetter === txt[activeText].length) {
    if (0 <= activeLetter) {
        setTimeout(() => {
            spnText.classList.add('mark');
        }, 2000)
    }
    activeText++;
    if (activeText === txt.length) activeText = 0;

    return setTimeout(() => {
        activeLetter = -15;
        spnText.textContent = '';
        spnText.classList.remove('mark');
        addLetter();
    }, 4000)
}
 setTimeout(addLetter, 100)

}


addLetter(); //pierwsze wywołanie


// Animacja kursora 
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);