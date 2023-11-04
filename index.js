// // let boxx = document.querySelector(.box)
// let el = document.querySelector('.box');
// box.onclick = () => {
// //     box.className = 'green'
    
   
   
// // }



// // Создаем кнопку
// let btn = document.createElement("button");
// btn.innerHTML = "+1";
// document.body.appendChild(btn);

// // Создаем элемент для отображения количества
// let span = document.querySelector("span");

// // Привяжем обработчик к кнопке     
// btn.addEventListener("click", () => {
//   // Увеличиваем количество на 1
//   let count = parseInt(span.innerHTML);
//   count++;
  
//   // Обновляем количество
//   span.innerHTML = count;
// });

// const plusBtn = document.getElementById('plus');
// const minusBtn = document.getElementById('minus');
// const inputField = document.getElementById('input');

// plusBtn.addEventListener('click', function() {
//   const value = parseInt(inputField.value) || 0;
//   inputField.value = value + 1;
// })

// minusBtn.addEventListener('click', function() {
//   const value = parseInt(inputField.value) || 0;

//   if (value > 0) {
//     inputField.value = value - 1;
//   } else {
//     alert('Вы не можете отнимать!');
//   }
// })
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