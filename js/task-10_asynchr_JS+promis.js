// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear")
// let timeoutId;
//     const arr= [];

// setBtn.addEventListener("click", () => {
//     timeoutId = setTimeout(() => {
//         console.log("I love async JS!");
//     }, 7000);
//     console.log(timeoutId);
//     arr.push(timeoutId);
// });


// clearBtn.addEventListener("click", () => {
//     console.log(arr);
//     arr.map(() => {
//         clearTimeout(arr[0])
//     console.log(`Timeout width id ${arr[0]} has stopped!`)
// })
//     arr.slice(0,1);
//     console.log(arr);
//     return
// });





// const startBtn = document.querySelector(".js-set");
// const stopBtn = document.querySelector(".js-clear");
// let intervalId = null;

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: intervalId, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });




// const date = new Date();

// console.log(date);





// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);





// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// // Повертає день місяця від 1 до 31
// console.log("Day: ", date.getDate()); // 16

// // Повертає день тижня від 0 до 6, починається з неділі
// console.log("Day of the week: ", date.getDay()); // 6

// // Повертає місяць від 0 до 11
// console.log("Month: ", date.getMonth()); // 2

// // Повертає рік з 4 цифр
// console.log("Full year: ", date.getFullYear()); // 2030

// // Повертає години
// console.log("Hours: ", date.getHours()); // 14

// // Повертає хвилини
// console.log("Minutes: ", date.getMinutes()); // 25

// // Повертає секунди
// console.log("Seconds: ", date.getSeconds()); // 0

// // Повертає мілісекунди
// console.log("Milliseconds: ", date.getMilliseconds()); // 0




// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50); 
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// date.setMonth(4); 
// console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"


// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу



// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
// .then(value => console.log(value)) // "Success! Value passed to resolve function"
// .catch(error => console.log(error)) // "Error! Error passed to reject function"
// .finally(() => console.log("Promise settled")); // "Promise settled"



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });
  
  promise
    .then(value => {
      console.log(value); // 5
      return value * 2;
    })
    .then(value => {
      console.log(value); // 10
      return value * 3;
    })
    .then(value => {
      console.log(value); // 30
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
  