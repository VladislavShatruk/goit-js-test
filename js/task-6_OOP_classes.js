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