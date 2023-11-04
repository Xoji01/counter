let colElement = document.getElementById('count');
let increaseBtn = document.getElementById('increase-btn');
let decreaseBtn = document.getElementById('decrease-btn');
let clearBtn = document.getElementById('clear-btn');

increaseBtn.addEventListener('click', incrementCounter);
decreaseBtn.addEventListener('click', decrementCounter);
clearBtn.addEventListener('click', clearCounter);


let counter = 0;

function incrementCounter() {
  counter += 1;
  updateCounter();
}


function decrementCounter() {
  counter -= 1;
  updateCounter();
}


function clearCounter() {
  counter = 0;
  updateCounter();
}


function updateCounter() {
  colElement.innerHTML = counter;
}