// let sum = ((x, y, z) => ({
//   x: x,
//   y: y,
//   z: z
// }))
// console.log(sum(1, 2, 3));


// 在 es5 中 谁在调用这个函数, this 就指向谁
// 在 es6 中 在定义的时候, this 指向谁, 在执行的时候, this就之指向什么
let test = {
  name: 'test',
  say: function () {
    console.log(this);
    console.log(this.name);
  }
}

test.say()
// eval