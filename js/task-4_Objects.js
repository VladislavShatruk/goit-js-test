// function formatMessage(message, maxLength) {
//     if (message <= maxLength) {
//         return message.slice(0);
//     }
//     else {
//         return `${message.slice(0,maxLength)}...`;
//     }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"




// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length-1];
//   console.log(lastTag);



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
//   }



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
//   const values = [];
  
//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   console.log(keys);
//   console.log(values);



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);
//   for (let key of keys) {
//     values.push(apartment[key])
//   }
//   console.log(keys);
//   console.log(values);



// function countProps(object) {
//     let propCount = 0;

//      const keys = Object.keys(object)
//      propCount = keys.length;
    
    /// for (const key in object) {
    ///     if (object.hasOwnProperty(key)) {
    ///       propCount += 1;
    ///       console.log(key);
    ///       console.log(propCount);
    ///     }
    ///   }

//     return propCount;
//   }
//     console.log(countProps({ name: "Mango", age: 2 }));


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (let i = 0; i < values.length; i++) {
//       totalSalary += values[i];
//       console.log(totalSalary);
//     }
//     return totalSalary;
//   }
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


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
//     }
//   ];  

// for (const book of books) {
//     console.log(book); // Об'єкт книги
//     console.log(book.title); // Назва
//     console.log(book.author); // Автор
//     console.log(book.rating); // Рейтинг
//   }



// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   for (let color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(color.hex);
//     console.log(color.rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);



// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38,},
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51,},
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 7.75,}
//   ];
  
//   const authorToSearchFor = "Robert Sheckley";
  
//   for (const book of books) {
//       if(book.author === authorToSearchFor) {
//           console.log(book);
//           console.log(book.title)
//           console.log(book.rating)
//       }
//   }
  



// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     for (let product of products) {
//       if (product.name === productName) {
//         return product.price;
//       }
//     }
//       return null;
//   }
//   console.log(getProductPrice("Scanner"));



// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//   ];
  
//   const titles = [];
  
//   for (const book of books) {
//       titles.push(book.title)
//   }
  
//   console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]



// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//   ];
  
//   let totalRating = 0;
  
//   for (const book of books) {
//     totalRating += book.rating;
//   }
  
//   const averageRating = totalRating / books.length;
//   console.log(averageRating); // 8
  


// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     const propValues = [];

//     for (const product of products) {
//         if (!(product[propName] === undefined)) {
//             propValues.push(product[propName]);
//         }
//         else {
//           continue;
//         }
//     }

//     return propValues;
//   }
//   console.log(getAllPropValues("asd"));



// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
  
// for (let product of products) {
//     if (product.name === productName) {
//       let totalPrice = product.price * product.quantity;
//       return `${productName} = ${totalPrice}`;
//     }
//   }
//     return `Product ${productName} not found!`
// }
//   console.log(calculateTotalPrice("Scanner"));



// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },
//   };



// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       return "Returning all books";
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//           return `Adding book ${bookName}`;
//     },
//   };
  
//   // Виклики методів
//   console.log(bookShelf.getBooks()); // поверне "Returning all books"
//   console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
//   console.log(bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"



// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//       let totalPrice = 0;
//       for (let potion of this.potions) {
//         totalPrice += potion.price;
//       }
//       return totalPrice;
//     },
//   };
// console.log(atTheOldToad.getTotalPrice());



// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//       for (let potion of this.potions) {
//         if (potion.name === oldName) {
//           potion.name = newName;
//         }
//       }
//         return this.potions
//     },
//   };
//   console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));



// function add(...args) {
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
//   }
//   console.log(add(32, 6, 13, 19, 8));



// function addOverNum(value, ...args) {
//     let total = 0;
//     for (let arr of args) {
//       if (value < arr) {
//         total += arr;
//       }
//     }
//     return total;
//   }
//   console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));



// function getExtremeScores(scores) {
//     const maxMin = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//     }
//     return maxMin;
//    }
//    console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }


// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }



// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings};
// console.table(finalSettings);  