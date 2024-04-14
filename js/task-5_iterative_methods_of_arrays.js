// function greet(name) {
//     console.log(`Welcome ${name}!`);
//   }
  
//   function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//   }
  
//   function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
//   }
  
//   registerGuest("Mango", greet); // "Registering Mango!"
//                                                                // "Welcome Mango!"
  
//   registerGuest("Mango", notify); // "Registering Mango!"
//                                                                   // "Dear Mango, your room will be ready in 30 minutes"



// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
//   }
  
//   // Передаємо інлайн-функцію greet у якості колбека
//   registerGuest("Mango", function greet(name) {
//     console.log(`Welcome ${name}!`);
//   });
  
//   // Передаємо інлайн-функцію notify у якості колбека
//   registerGuest("Poly", function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//   });



// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// console.log("forEach");
// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });



// function filterArray(numbers, value) {
//     const newArr = [];
//     numbers.forEach(function (number){
//       if (number > value) {
//         newArr.push(number);
//       }
//     });
//     return newArr;
//   }
//   console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]



// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };



// // До
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }
  
//   // Після
//   const arrowAdd = (a, b, c) => a + b + c;



// const add = (...args) => {
//     console.log(args);
//   };
  
//   add(1, 2, 3); // [1, 2, 3]



// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// console.log("");
// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });
// console.log("");
// // Окреме оголошення кол-бек функції
// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);



// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
// }

// const newArray = (numbers, value) => {
//     const filteredNumbers = [];
//     numbers.forEach((number) => {
//     if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log("");
// console.log(newArray([12, 24, 8, 41, 76], 20));



// function changeEven(numbers, value) {
//     const newArr = [];
//     let number = 0;
//     numbers.forEach(num => {
//       if (num % 2 === 0) {
//         number = num + value;
//       newArr.push(number);
//       }
//       else {
//       newArr.push(num);
//       }
//      });
//     return newArr;
//   }
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   const genres = books.flatMap(ganr => ganr.genres);

//   console.log(genres);



// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до negatibigValues eValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter((book) => book.author === AUTHOR);
//   console.log(topRatedBooks);
//   console.log(booksByAuthor);



// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   ];
//   const BOOK_TITLE = "The Dream of a Ridiculous Man";
//   const AUTHOR = "Robert Sheckley";
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);



// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false



// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true



// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, item) => {
//     console.log(item);
//     return acc + item ;
// },0);
// console.log("");
// console.log(total);



// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     const avTime = player.playtime / player.gamesPlayed;
//     return avTime + acc;
// },0);



// const students = [
//     { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//     { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//     { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//     { name: "Kiwi", score: 94, courses: ["literature", "science"] },
//   ];

//   const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]