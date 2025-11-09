
// 第一题 最小值 

function min(a,b) {
    if (a<b) {
        return(a)
    }else if (a==b) {
        return(`${a}=${b}`)
    }else if (a>b) {
        return(b)
    }
}
console.log(min(9,10))
console.log(min(10,8))
console.log(min(9,9))

// 第二题 递归

function digui(n) {
    if (n==0) {
        return("偶")
    }else if (n==1) {
        return("奇")
    }else if (n>1) {
        n-=2
        return(digui(n))
    }else {
        n+=2
        return(digui(n))
    }
}
console.log(digui(50))
console.log(digui(75))
console.log(digui(-1))
console.log(digui(-50))

// 第三题 豆子计数
//  "BoB"
function countBs(str) {
  if (str == "") {
    return (0)
  }
  if (str[0] == "B") {
    return (1 + countBs(str.slice(1)))
  }
  else {
    return (countBs(str.slice(1)))
  }
}
console.log(countBs("BoB")) 
// 通用
function countchar(strr,m) {
  if (strr == "") {
    return (0)
  }
  if (strr[0] == m) {
    return (1 + countchar(strr.slice(1),"k"))
  }
  else {
    return (countchar(strr.slice(1),"k"))
  }
}
console.log(countchar("kakkerlak","k")) 


