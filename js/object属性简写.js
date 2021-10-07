let x = 1, y = 2, z = 3
let obj = {
  x,
  y,
  [z + y]: 5,
  // 函数名之前加 * , 变成异步函数
  * hello () {
    console.log('hello');
  }
}

// function* functionName(){

// }

obj.hello()