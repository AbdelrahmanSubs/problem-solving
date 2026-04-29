//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of

function findNb(m) {
  let finalNum = 0;
    for (let i=1; finalNum < m; i++) {
      finalNum += i**3
    if (finalNum === m ) {
      return i;
    }
    }
    return (-1);
}

// Best Practice that I found after submitted the solution: 
// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }
// How it works?
// m = 36
// n = 1
// m = 36 - 1³ = 35
// n = 2
// m = 35 - 8 = 27
// n = 3
// m = 27 - 27 = 0