let _age = 4

class Animal {
  constructor(type) {
    this.type = type
  }
  // 只读
  get age () {
    return _age
  }
  // 可修改
  set age (val) {
    if (val < 7 && val > 4) {
      _age = val
    }
  }
  eat () {
    console.log('i am eat food');
  }
}

const dog = new Animal('dog')
const monkey = new Animal('monkey')
console.log(dog);
console.log(monkey);

console.log(dog.age);
dog.age = 5
console.log(dog.age);