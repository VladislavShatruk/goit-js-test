//          DELEGATION EVENTS          //


// function getRandomHexColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()* 16)]
//     }

//     return color;
// }


// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);


// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }
//     const selectedColor = event.target.dataset.color;

//     output.textContent = `Selected color: ${selectedColor}`;
//     output.style.color = selectedColor;
// }

// createPaletteItems();

// function createPaletteItems() {
//     const items = [];
//     for (let i = 0; i < 60; i++) {
//         const color = getRandomHexColor();
//         const item = 
//         document.createElement("button");
//         item.type = "button";
//         item.dataset.color = color;
//         item.style.backgroundColor = color;
//         item.classList.add("item");
//         items.push(item);
//     }
//     colorPalette.append(...items);
// }



//              LIBRARY  Lodash          //

// console.log(_);
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]





//              LIBRARY  basicLightbox            //



// const instance = basicLightbox.create(`
// 	<h1>Not closable</h1>
// 	<p>It's not possible to close this lightbox with a click.</p>
// `, {
// 	closable: false
// })
// instance.show();
// instance.close();



//              DESTRUCTURING          //


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author, isPublic, rating } = book;
  
//   // Використовуємо
//   const accessType = isPublic ? "pulbic" : "private";
//   const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
  


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, bookTitle, coverImage, bookRating } = book;
//   console.log(title); // "The Last Kingdom"
//   console.log(bookTitle); // undefined
//   console.log(coverImage); // undefined
//   console.log(bookRating); // undefined



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//   // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
//   const {
//     title,
//     author,
//     coverImage = "<https://via.placeholder.com/640/480>"
//   } = book;
  
//   console.log(title); // "The Last Kingdom"
//   console.log(author); // "Bernard Cornwell"
//   console.log(coverImage); // "<https://via.placeholder.com/640/480>"



// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
//   console.log(title); // "The Last Kingdom"
//   console.log(bookAuthor); // "Bernard Cornwell"
//   console.log(isPublic); // true
//   console.log(bookRating); // 8.38



// const book = {
//     title: "The Last Kingdom",
//     coverImage:
//       "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>",
//   };
  
//   const {
//     title,
//     coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
//   } = book;
  
//   console.log(title); // "The Last Kingdom"
//   console.log(bookCoverImage); // "<https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg>"



// const book = {
//     title: "The Dream of a Ridiculous Man",
//   };
  
//   const {
//     title,
//     coverImage: bookCoverImage = "<https://via.placeholder.com/640/480>",
//   } = book;
  
//   console.log(title); // "The Dream of a Ridiculous Man"
//   console.log(bookCoverImage); // "<https://via.placeholder.com/640/480>"





// for (const book of books) {
//     const { title, author, rating } = book;
  
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }


// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }



// function printUserInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
//   }
  
//   printUserInfo({ 
//       name: "Alice", 
//       age: 25, 
//       hobby: "dancing" 
//   }); // Name: Alice, Age: 25, Hobby: dancing


// function printUserInfo(user) {
//     const { name, age, hobby } = user
//       console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
//     }
    
//     printUserInfo({ 
//         name: "Alice", 
//         age: 25, 
//         hobby: "dancing" 
//     }); // Name: Alice, Age: 25, Hobby: dancing
    

// function printUserInfo({ name, age, hobby }) {
//     console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
//   }
  
//   printUserInfo({ 
//       name: "Alice", 
//       age: 25, 
//       hobby: "dancing" 
//   }); // Name: Alice, Age: 25, Hobby: dancing



// function doStuffWithBook(title, pages, downloads, rating, isPublic) {
//     // Робимо щось з параметрами
//     console.log(title);
//     console.log(numberOfPages);
//     // І так далі
//   }
  
//   // ❌ Що таке 736? Що таке 10283? Що таке true?
//   doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);


// function doStuffWithBook(book) {
//     // Робимо щось з властивостями об'єкта
//     console.log(book.title);
//     console.log(book.pages);
//     // І так далі
//   }

//   // ✅ Все зрозуміло
// doStuffWithBook({
//     title: "The Last Kingdom",
//     pages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   });



// function doStuffWithBook(book) {
//     const { title, pages, downloads, rating, isPublic } = book;
//     console.log(title);
//     console.log(pages);
// }

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//     console.log(title);
//     console.log(pages);
// }



// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
// };
  
//   const { name, tag, stats } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }


//   const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const {
//     name,
//     tag,
//     stats: { followers, views, likes },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(views); // 4827
//   console.log(likes); // 1308


// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const {
//     name,
//     tag,
//     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308





//              DESTRUCTURING  ARRAY        //




// const color = [200, 255, 100];
// const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"



// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]



// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"



// function printFruits(fruits) {
//     console.log(fruits[0], fruits[1], fruits[2]);
//   }
  
//   printFruits(["apple", "banana", "orange"]); // "apple banana orange"


//   function printFruits([firstFruit, secondFruit, thirdFruit]) {
//     console.log(firstFruit, secondFruit, thirdFruit);
//   }
  
//   printFruits(["apple", "banana", "orange"]); // "apple banana orange" 



