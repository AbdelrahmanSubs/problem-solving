// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46

function digPow(n, p){
  let singleNum = n.toString().split("")
  let sum = 0;
  
  
  for(let i = 0; i < singleNum.length; i++) {
    sum += singleNum[i]**(p + i)
  }
  
  
  return sum % n === 0 ? sum / n : -1
}


// What I Used: 
// - toString + Split to get an array of the numbers 
// - looping on every element and ** it with p+i 
// - if sum%n === 0 that means K is and integer so return K or -1 if it's false 

// Cleaver Solution that I found 
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }

// OR

// function digPow(n, p){
//   var ans = (''+n).split('')
//     .map(function(d,i){return Math.pow(+d,i+p) })
//     .reduce(function(s,v){return s+v}) / n
//   return ans%1 ? -1 : ans    
// }//z.