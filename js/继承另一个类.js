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


// let Dog = function () {
//   // 初始化父类的构造函数
//   Animal.call(this, 'dog')
//   this.run = function () {
//     console.log('i am run ');
//   }
// }

// Dog.prototype = Animal.prototype

// let dog = new Dog()
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
    console.log('i am walk');
  }
}

class Dog extends Animal {
  constructor(type) {
    super(type)
    this.age = 2
  }
}

let dog = new Dog('dog')

dog.eat()