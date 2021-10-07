let arr = [1, 2, 3, 4, 5]
// let fild = arr.filter((item) => {
//     return item % 2 === 0
// })
// console.log(fild);

// Array.prototype.find
const find = arr.find((item) => {
  return item % 2 === 0
})
// console.log(find);

// Array.protottype.findIndex(返回值的索引)
const findIndex = arr.findIndex((item) => {
  return item === 2
})
console.log(findIndex);