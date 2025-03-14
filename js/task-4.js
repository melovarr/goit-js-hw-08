// Напиши скрипт управління формою логіна.
//  <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log in</button>
//  </form>
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що ''. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
const mailPassForm = document.querySelector(".login-form");
mailPassForm.addEventListener("submit", formSubmiting);
function formSubmiting(event) {
    event.preventDefault();
   
    const formElements = event.target.elements;
    if (formElements.email.value === "" || formElements.password.value === "") {
        alert("All form fields must be filled in");
    } else {
        const loginInfo = {
            email: formElements.email.value.trim(),
            password: formElements.password.value.trim(),
        }
        console.log(loginInfo);
        event.target.reset();
    }
}