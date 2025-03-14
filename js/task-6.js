// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
  // <div id="controls">
  //   <input type="number" min="1" max="100" step="1" />
  //   <button type="button" data-create>Create</button>
  //   <button type="button" data-destroy>Destroy</button>
  // </div>
  
  // <div id="boxes"></div>
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount. Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 }
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
//-----------------------------------
const formForBoxes = document.querySelector("#controls");
const formBoxesInput = document.querySelector("#controls>input");
const createBoxesButton = document.querySelector("button[data-create]");
const destroyBoxesButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
boxesContainer.style.display = "flex";
boxesContainer.style.flexWrap = "wrap";

let amount;
let l = 30;
const boxes = [];

formBoxesInput.addEventListener("change", (event) => {
  amount = event.target.value;
    return amount;
})

createBoxesButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  l = 30;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxesContainer.insertAdjacentHTML("beforeend", boxes.map((box) => `<div class="color-box" style="background:${box.color}; width:${box.length}; height:${box.height}"></div>`).join(""));
  }
  formBoxesInput.value = '';
});

destroyBoxesButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  amount = 0;
})

function createBoxes(amount) {
  for (let i = 0; i < amount; i++){
      boxes.splice(i, 1, {
          color: getRandomHexColor(),
          length: `${l}px`,
      height: `${l}px`});
    l += 10
    }
    return; 
}

// const createBoxes = (boxes) => {
// return boxes.map((box) => {
//         const boxEl = document.createElement("div");
//         boxEl.classList.add("color-box");
//         boxEl.style.backgroundColor = box.color;
//         boxEl.style.height = box.height;
//         boxEl.style.width = box.length;
//         return boxEl;
// })
// }



//-----===================-----------------------------------
// const createBoxesButton = document.querySelector('.boxes');

// let amount = 10;
// let l = 30;
// // const box = {};
// const boxes = []
// function arrayBoxes(amount) {
//   for (let i = 0; i < amount; i++){
//       boxes.push({
//           color: getRandomHexColor(),
//           length: `${l}px`,
//       height: `${l}px`});
//     l += 10
//     }
//     return; 
// }
// const createBoxes = (boxes) => {
// return boxes.map((box) => {
//         const boxEl = document.createElement("div");
//         boxEl.classList.add("color-box");
//         boxEl.style.backgroundColor = box.color;
//         boxEl.style.height = box.height;
//         boxEl.style.width = box.length;
//         return boxEl;
// })
// }
// arrayBoxes(amount);
// createBoxesButton.append(...createBoxes(boxes));
// console.log(boxes);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//  }