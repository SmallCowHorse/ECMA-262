// 参数默认值
// function f (x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 42
//   }

//   return x + y + z
// }

// console.log(f(1, 8, 43));

function f(x, y = 7, z = x + y) {
  // 参数的个数
  // console.log(Array.from(arguments));
  // 能获取到没有默认值的参数
  console.log(f.length);
  return x * 10 + z
}
console.log(f(1, undefined, 3, 4));