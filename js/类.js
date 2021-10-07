// let Animal = function (type) {
//   this.type = type
// }

// Animal.prototype.eat = function () {
//   console.log('i am eat food hello');
// }

// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog);
// console.log(monkey);
// // monkey.eat = function () {
// //   console.log('error');
// // }
// monkey.constructor.prototype.eat = function () {
//   console.log('error');
// }
// dog.eat()
// monkey.eat()


// 构造函数内写属性, 构造函数外写方法
class Animal {
  constructor(type) {
    this.type = type
  }
  eat() {
    console.log('i am eat food');
  }
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')

console.log(dog);
console.log(monkey);

dog.eat()
monkey.eat()

console.log(typeof Animal);