const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0; //setne sekundy
let active = false;
let idI;

const timer = () => {
 if (!active) {
  active = !active
  btnTime.textContent = 'Pauza';
  idI = setInterval(start, 10);
 } else {
  active = !active
  btnTime.textContent = 'Start';
  clearInterval(idI)
 }
}

const start = () => {
 time++;
 panel.textContent = (time / 100).toFixed(2);

}

const reset = () => {
 time = 0;
 panel.textContent = '---';
 active = false;
 btnTime.textContent = 'Start';
 clearInterval(idI)
}

btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);