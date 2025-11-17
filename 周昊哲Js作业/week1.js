/*第一题*/ 
let a = "#"
while (a.length<7) {
    console.log(a)
    a=a+"#"
} 
/*第二题*/ 
let b = 0
while (0<=b<100) {
    if (b%3!=0) {
        if (b%5!=0) {
            console.log(b)
        }else {
            console.log("Buzz")
        }
    }else {
        if (b%5!=0) {
            console.log("Fizz")
        }else {
            console.log("FizzBuzz")
        }
    }
    b=b+1
    if (b>100) {
        break
    }
}
/*第三题*/ 
let e=""
let f=8
for (let y=0;y<f;y=y+1) {
    for (let x=0;x<f;x=x+1) {
        if ( (x+y)%2==0 ) {
            e=e+" "
        }else {
            e=e+"#"
        }
    }
   e=e+'\n'
}console.log(e)