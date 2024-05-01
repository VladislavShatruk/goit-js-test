// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading);

// const image = document.createElement("img");
// image.classList.add("title-img");
// image.src = "https://e2k9ube.cloudimg.io/v7/https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/2/full_42489.jpg?width=856&height=482&func=crop"
// image.alt = "Nature";
// console.log(image);

// const box = document.createElement("div");
// box.classList = "box-title";
// console.log(box);

// document.body.append(heading,image,box);



// const button = document.querySelector(".my-button");

// const handleClick = ( ) => { 
//     console.log("The button was pressed and now the next image will appear");
//  };
 
//  button.addEventListener("click", handleClick);



// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//     console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//     btn.addEventListener("click", handleClick);
// console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//     btn.removeEventListener("click", handleClick);
//     console.log("click event listener was removed from btn");
// });



//   Властивості key & code


// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn)

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }



const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
function foo() {

  const info = {
    login: elements.login.value,
    password: elements.password.value
  }

  if (info.login === "" || info.password === "") {
    return console.log("Please fill in all the fields!");
  }
  return info;
}
  console.log(foo());
  registerForm.reset();
}



//   Подія change  


// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }



//   Подія input  


// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });



// Подія focus і blur


// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });




// Підсумкова пам'ятка

// Згадаємо та підсумуємо основні методи і властивості DOM-елементів, з якими ми будемо працювати далі:



// Пошук DOM-елементів

// element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
// element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.


// Властивості DOM-елемента

// element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
// element.innerHTML - містить HTML-вміст елемента element.
// element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.


// CSS класи на DOM-елементах

// element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
// element.classList.add(className) - додає клас className до списку класів елемента element.
// element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
// element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
// element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.


// Створення та видалення DOM-елементів

// document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
// element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
// element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
// element.remove() - видаляє DOM-елемент з DOM дерева.
// insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.


// Події

// element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
// element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
// keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
// submit - подія, яка виникає при відправці форми.
// change - подія, яка виникає при зміні значення елемента форми.
// input - подія, яка виникає при введенні даних в текстове поле.
// focus - подія, яка виникає, коли елемент отримує фокус.
// blur - подія, яка виникає, коли елемент втрачає фокус.