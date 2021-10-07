// 转换
// let args = [].slice.call(arguments) // collection
// let imgs = [].slice.call(document.querySelectorAll('img')) // nodeList
// Array.prototype.from()
let args = Array.from(arguments)
let imgs = Array.from(document.querySelectorAll('img'))
// 可传入三个参数：伪数组， 遍历的函数， this对象
// Array.from(arrayList, mapFn, thisArg)
// let array = Array(5)
// array.forEach((item) => {
//   item = 1
// })
// for (let i = 0; i < array.length; i++) {
//   array[i] = 1
// }
let array = Array.from({length: 5}, () => (1))
// {0: 'a', 1: 'b', length: 2}
console.log(array);