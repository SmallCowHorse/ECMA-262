// 把一个对象复制到另一个对象上
// Object.assign 只能实现浅拷贝

let target = {
  a: { b: { c: { d: { e: 3, h: 2, j: 6 } } } }
}
// let target = undefined // null
// Cannot convert undefined or null to object
// let source = {
//   a: { b: { c: { d: { e: 1, h: 2 } } } }
// }
// let source = undefined // null
// 无效

Object.assign(target, source)

console.log(target);
