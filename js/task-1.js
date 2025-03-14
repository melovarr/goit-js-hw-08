// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
//----------------------------------------------------------------
const listById = document.querySelector("#categories");

console.log(listById.childElementCount);

const itemTitleElement = document.querySelectorAll(".item>h2");

const itemTitleElements = document.querySelectorAll(".item>ul");

for (let i = 0; i < itemTitleElement.length; i++) {
    console.log(`${itemTitleElement[i].textContent} - ${itemTitleElements[i].childElementCount}`);
}