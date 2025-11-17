// 第五章
// 1.扁平化
let arrays = [[1, 2, 3], [4, 5], [6]];
let sum = arrays.reduce((a,b) => a.concat(b))
console.log(sum)

// 2.我的循环
function loop(value1,test,upFunc,mainFunc) {
    if (!test(value1)) {
        return false ;
      
    }else if (test(value1)) {
        mainFunc(value1)
        return loop(upFunc(value1),test,upFunc,mainFunc)
    }

}
loop(3, n => n > 0, n => n - 1, console.log);

// 3.所有
function every(array,test) {
    let nn=0
    for (items of array) {
        if (test(items)) {
            continue;
        } else if (!test(items)) {
            nn+=1;
        }
    }
    if (nn==0) {
        return true;
    } 
    else {
        return false;
    }
}console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

// 4.主要书写方向
const SCRIPTS = [
  // 拉丁语系（从左到右）
  {
    name: "Latin",
    ranges: [[65, 91], [97, 123], [32, 32], [33, 64], [91, 97], [123, 127]],
    direction: "ltr"
  },
  // 阿拉伯语系（从右到左）
  {
    name: "Arabic",
    ranges: [[1536, 1792], [1872, 1920], [2048, 2112]],
    direction: "rtl"
  },
  // 希伯来语（从右到左）
  {
    name: "Hebrew",
    ranges: [[1424, 1536]],
    direction: "rtl"
  },
  // 汉字（从上到下）
  {
    name: "Han",
    ranges: [[19968, 40959], [13312, 19903]],
    direction: "ttb"
  },
  // 日语假名（从左到右）
  {
    name: "Hiragana",
    ranges: [[12352, 12447]],
    direction: "ltr"
  },
  {
    name: "Katakana",
    ranges: [[12448, 12543]],
    direction: "ltr"
  },
  // 泰语（从左到右）
  {
    name: "Thai",
    ranges: [[3584, 3711]],
    direction: "ltr"
  },
  // 俄语（从左到右）
  {
    name: "Cyrillic",
    ranges: [[1040, 1103], [1025, 1025], [1105, 1105]],
    direction: "ltr"
  }
];
// 以上是上网查的教材里的SCRIPTS数据

function dominatDirection(text) { 
    
}


