// ES5中有多少遍历的方法
// 他们有什么优势和缺点

// for 循环
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
  if (array[i] === 2) {
    break
    // continue
  }
  // console.log(array[i])
}

// forEach(写法更加简洁, 但是不支持 break 和 continue)
array.forEach((item) => {
  if (item === 2) {
    // break
    // continue
  }
  // console.log(item);
})

// every (也不支持 break 和 continue，但是通过 return true / false 可达到同样的效果)
array.every((item) => {
  if (item === 2) {
    return true
  } else {
    // console.log(item);
    return true
  }
})

// for in
// array.a = 8
for (let index in array) {
  if (index * 1 === 2) {
    // break
    continue
  }
  // console.log(index, array[index]);
}

// for of
const proce = {
  A: [1, 2, 3],
  B: [4, 5, 6],
  C: [7, 8, 9]
}
for (const key in proce) {
  console.log(key, proce[key]);
}
// for (const item of proce) {
//   console.log(item);
// }