// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false



// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }



// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }



// class User {
//     constructor(name, email) {
//           console.log(name, email);
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
//   console.log(mango); // {}



// class User {
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com");
//   console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
  
//   const poly = new User("Poly", "poly@mail.com");
//   console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }



// class Car {
//     constructor(brand, model, price){
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   }

//   console.log(new Car("Audi", "Q3", 36000));
//   console.log(new Car("Nissan","Murano", 31700));



// class User {
//     constructor(params) {
//       this.name = params.name;
//       this.email = params.email;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
  
//   console.log(mango); 
//   // { name: "Mango", email: "mango@mail.com" }



// class User {
//     name;
//     #email;
  
//     constructor(params) {
//       this.name = params.name;
//       this.#email = params.email;
//     }
  
//     // Публічний метод для отримання електронної пошти
//     getEmail() {
//       return this.#email;
//     }
  
//     // Публічний метод для зміни електронної пошти
//     changeEmail(newEmail) {
//       if (this.#validateEmail(newEmail)) {
//         this.#email = newEmail;
//       } else {
//         console.log('Invalid email format');
//       }
//     }
  
//     // Приватний метод для валідації електронної пошти
//     #validateEmail(email) {
//       return email.includes('@');
//     }
//   }
  
//   const mango = new User({
//     name: 'Mango',
//     email: 'mango@mail.com',
//   });
  
//   // Спробуємо змінити електронну пошту
//   mango.changeEmail('newmail.com'); // "Invalid email format"
//   mango.changeEmail('new@mail.com');
//   console.log(mango.getEmail()); // "new@mail.com"
  
//   // Прямий виклик приватного методу ззовні призведе до помилки
// //   mango.#validateEmail('test'); // Помилка
  
  

// class User {
//     static roles = {
//       admin: "admin",
//       editor: "editor",
//       basic: "basic"
//     };
  
//     #email;
//     #role;
    
//     constructor(params) { 
//       this.#email = params.email; 
//       this.#role = params.role || User.roles.basic; 
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.roles.admin,
//   });
  
//   console.log(mango.role); // "admin"
//   mango.role = User.roles.editor;
//   console.log(mango.role); // "editor"
  


// class Car {
  
//     static maxPrice = 50000;
//     #price;
  
//     constructor(params) {
//       this.#price = params.price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if (newPrice <= Car.maxPrice) {
//         this.#price = newPrice;
//       }
//     }
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000



// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor(params) {
//       this.#email = params.email;
//       User.#takenEmails.push(params.email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com")); // false
//   console.log(User.isEmailTaken("mango@mail.com")); // true


// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.includes(pizzaName);
//   },
//   order(pizzaName) {

//     if (this.checkPizza) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
    
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Viennese"));

// console.log(pizzaPalace.order("Four meats"));

// console.log(pizzaPalace.order("Smoked"));



// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },

//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };


// console.log(pizzaPalace.checkPizza("Viennese"));

// console.log(pizzaPalace.order("Smoked"));



// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"



// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"



// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"



// class User {
  
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {           //статичний об'єкт
//     BASIC:"basic",
//     SUPERUSER: "superuser"
//   }
// }

// console.log(Admin.role.BASIC);



// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email); 
//     this.posts = params.posts;
// console.log(params.email);

//   }
// }

// const editor = new ContentEditor({ 
// 	email: "mango@mail.com", 
// 	posts: [] 
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"



// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor(params) {
//     super(params.email)
//     this.access = params.access;
//   }
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"



// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   };

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email)
//   }

//   isBlacklisted(email) {
//    return this.blacklistedEmails.includes(email)
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true




