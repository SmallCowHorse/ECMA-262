// let Animal = function (type) {
//   this.type = type
// }

// Animal.prototype.eat = function () {
//   Animal.walk()
//   console.log('i am eat food');
// }

// Animal.walk = function () {
//   console.log('i am walking');
// }

// let dog = new Animal('dog')
// dog.eat()


class Animal {
  constructor(type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food');
  }
  static walk () {
    console.log('i am walking');
  }
 }
 let dog = new Animal('dog')
 dog.eat()
 