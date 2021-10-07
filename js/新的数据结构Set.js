// Set

let s = new Set()
// let s = new Set([1, 2, 3, 4])
// s.add('hello')
// s.add('goodbye')
s.add('hello').add('goodbye').add('hello')
// // 删除指定数据
// s.delete('hello')
// // 全部清空
// s.clear()
// // 查找指定数据是否存在
// s.has('hello')
console.log(s.has('hello'), s.size);
// 所有的 key 值
console.log(s.keys());
// 所有的 value 值
console.log(s.values());
// 所有的 键值对
console.log(s.entries());

s.forEach((item) => {
  console.log(item);
})

for (let item of s) {
  console.log(item);
}
// WeakSet, WeakMap