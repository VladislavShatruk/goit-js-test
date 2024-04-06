// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     const totalPrice = quantity * pricePerDroid;
    
//     if (customerCredits < totalPrice) {
//        return console.log("Insufficient funds!");
//     }
//      console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"



// function getLastElementMeta(array) {
//     const lastArrIndx = array.length - 1;
//     console.log(lastArrIndx);
//     console.log(array[lastArrIndx]);
//     const newArray = [lastArrIndx, array[lastArrIndx]]
//     console.log(newArray);
// }



// const array = ["apple", "peach", "pear"];
// const lastArrIndx = array.length - 1;
// console.log(array[lastArrIndx]);



// const array = ["Mango", "hurries", "to", "the", "train"];
// const strArray = array.join("");
// console.log(strArray);
// console.log(strArray.length);



// function calculateEngravingPrice(message, pricePerWord) {
//     const splitMessage = message.split(" ");
//     return splitMessage.length * pricePerWord;
//   }
//   console.log(calculateEngravingPrice("Web-development is creative work", 40));



// function getSlice(array, value) {
//     const result = array.indexOf(value);
//     console.log(result);
//     if (result != -1) {
//       return array.slice(0,result+1)
//     }
//     return array = [];
//   }
//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));



// const tags = [];
// for(let i = 0; i < 3; i++) {
// 	tags.push(`tag- ${i}`);
// }
// console.log(tags); // ["tag-0", "tag-1", "tag-2"]



// function createArrayOfNumbers(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) {
//       array.push(`${i}`)
//     }
//     return array
//   }
//   console.log(createArrayOfNumbers(14, 17));



// const planets = ["Earth", "Mars", "Venus"];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }



// function calculateTotalPrice(order) {
//     let sum = 0;
//     let elem = 0;
//     for (let i = 0; i < order.length; i++) {
//         elem = order.slice(i, i+1)
//         console.log(elem);
//       sum = Number(sum) + Number(elem);
//     }
//     return sum;
//   }
//   console.log(calculateTotalPrice([164, 48, 291]));



//   function getEvenNumbers(start, end) {
//     let total = [];
//     for (let i = start; i <= end; i++) {
//       if (!(i%2)) {
//         total.push(`${i}`);
//       }
//     }
//     return total;
//   }
//   console.log(getEvenNumbers(2, 6));



// function checkStorage(storage, item) {
//     const normItem = item.toLowerCase();
//      if (storage.includes(normItem)) {
//        return `${normItem} is available to order!`;
//      }
//      return "Sorry! We are out of stock!";
//    }
//    console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));



// function getCommonElements(array1, array2) {
//     const array3 = [];
//     for (let i = 0; i < array1.length; i++) {
//       if (array2.includes(array1[i])) {
//          array3.push(array1[i]);
//       }
//     }
//       return array3;
//   }
//   console.log(getCommonElements([1, 17, 3], [2, 1, 3, 17, 19]));



// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }



// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const newOrder of order) {
//       console.log(`${total} + ${newOrder}`);
//       total += Number(newOrder);
//       console.log(`= ${total}`);
//     }
//     return total;
//   }
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));



// function createReversedArray() {
//     let revArray = [];
//     for (const array of arguments) {
//         console.log(array);
//         revArray.push(array)
//         console.log(revArray);
//       }
//         return revArray.toReversed();
//   }
//   console.log(createReversedArray(12, 85, 37, 4));



// function calculateTax(amount, taxRate = 0.2) {
//     const result = amount * taxRate;
//     return result;
//   }
//   console.log(calculateTax(200));
//   console.log(calculateTax(100, 0.1));