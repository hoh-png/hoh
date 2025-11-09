// 1 总和
function range(x,y) {
    let list=[]
    for (let i=x;i<y+1;i+=1) {
        list.push(i) 
    }
    return list
}console.log(range(2,7))
function sum(shuzu) {
    let sum=0
    for (let i of shuzu) {
        sum+=i
    }
    return sum
}console.log(sum(range(2,7)))

// 2 反转
let myArray=["A","B","C"]
function reverseArray(a) {
    let b =[]
    for (let i=a.length-1;i>-1;i--)
        b.push(a[i])
    return b
}
let arrayValue = [12345]
function reverseArrayInPlace(c) {
    let d=[]
    for (let i =c.length-1;i>-1;i--) {
        c.slice(0,i)
        d+=c[i]
    }
    
    return c.concat(d)
}
console.log(reverseArray(myArray))
console.log(arrayValue)
// 第二题第二个不会，问了豆包，它的答案是这样
let array = [1, 2, 3, 4, 5]
function reverseArrayInPlace1(array) {
  // 只需要遍历数组的前半部分
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // 保存当前元素
    let temp = array[i];
    // 将对称位置的元素放到当前位置
    array[i] = array[array.length - 1 - i];
    // 将当前元素放到对称位置
    array[array.length - 1 - i] = temp;
  }
  return array;
  
}
reverseArrayInPlace1(array) 
console.log(array)

// 5 深度比较
function deepEqual(a, b) {
  // 1. 基本类型或引用同一对象，直接用===比较
  if (a === b) return true;

  // 2. 处理null（typeof null为object，需单独判断）
  if (a === null || b === null) return false;

  // 3. 判断是否为对象类型（排除基本类型）
  if (typeof a !== 'object' || typeof b !== 'object') return false;

  // 4. 获取对象的属性键数组
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // 5. 属性数量不同，直接返回false
  if (keysA.length !== keysB.length) return false;

  // 6. 递归比较每个属性的值
  for (const key of keysA) {
    // 检查b是否有该属性，且属性值深度相等
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // 所有属性都匹配，返回true
  return true;
}
// 不太看得懂题，自己写到豆包的第二步，实在不知道还有什么奥妙，所以问了问豆包，结果这题这么复杂
// 我觉得我应该再多花点时间看教程