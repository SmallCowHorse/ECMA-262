// function sum () {
//   let num = 0
//   Array.prototype.forEach.call(arguments, function(item) {
//     num += item * 1
//   })
//   // Array.from(arguments).forEach((item) => {
//   //   num += item * 1
//   // })
//   return num
// }

// console.log((sum(1, 2, 3, 4)));

// // 不知道传入多少实参
// function sum (base, ...nums) {
//   // Rest parameter
//   let num = 0
//   nums.forEach((item) => {
//     num += item * 1
//   })
//   return base * 2 + num
// }

// console.log(sum(1, 2, 3));

// 传入的实参的数组
function sum(x = 1, y = 2, z = 3) {
  return x + y + z
}

let data = [4, 5, 6]
// console.log(sum(data[0], data[1], data[2]));
// console.log(sum.apply(this, data));
// spread
console.log(sum(...data));