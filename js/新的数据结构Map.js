// let map = new Map([[key, value], [key, value], [key, value]])
// let map = new Map([[1, 2], [4, 5], [7, 8]])
let map = new Map()
map.set(1, 'value-2')
map.set(3, 'value-4')
// 修改
map.set(1, 'value-3')
// map.delete(1)
// map.clear()
console.log(map.size);
console.log(map.has(1));
console.log(map.get(1));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
map.forEach((value, key) => {
  console.log(key, value);
})

for (let [key, value] of map) {
  console.log(key, value);
}

let o = function () {
  console.log('o');
}

map.set(o, 4)
console.log(map);
console.log(map.get(o));
// WeakSet, WeakMap