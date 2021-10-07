// let array = Array(5)
// let array = ['', '', '', '', ''] // 但是无法指定长度

// 生成新数组的方法: from, of, fill

// Array.prototype.of
// let array = Array.of(1, 2, 3, 4, 5)
// console.log(array);

// Array.prototype.fill // 填充
// Array.fill(填充的值, 起始位置, 结束位置)
// Array.fill(value, start, end)
// let array = Array(5).fill(1)
// console.log(array);

let array = [1, 2, 3, 4, 5]
array.fill(8, 2, 4)
console.log(array)
