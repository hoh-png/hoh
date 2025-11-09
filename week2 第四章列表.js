// 3 列表
function arrayToList(array) {
  let list=[]
  for (let i=array.length-1;i>=0;i--) {
    list = {value:array[i], rest:list }
  }
  return list
}
console.log(arrayToList([10, 20]))

function listToArray(list) {
  let array= []
  let c=list
  while (c !==null) {
    array.push(c.value)
    current=c.rest
  }
  return array
}
console.log(listToArray(arrayToList([10, 20, 30])))

function prepend(d, list) {
  return {value: d, rest: list}
}
console.log(prepend(10, prepend(20, null)))

// 两个nth问的豆包
function nth(list, position) {
  let current = list;
  let index = 0;
  while (current !== null) {
    if (index === position) return current.value;
    current = current.rest;
    index++;
  }
  // 超出链表长度时返回undefined
  return undefined;
}
console.log(nth(arrayToList([10, 20, 30]), 1))

function nthRecursive(list, position) {
  // 递归终止条件：链表为空或位置为0
  if (list === null) return undefined;
  if (position === 0) return list.value;
  // 递归处理下一个节点，位置减1
  return nthRecursive(list.rest, position - 1);
}


