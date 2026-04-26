// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


function sumArray(array) {
  let sum = 0;
  if (!array || array.length < 2 ) {
    return 0
  } else {
    let smallestN = Math.min(...array);
    let biggestN = Math.max(...array);
     
    for (let i = 0; i < array.length; i++) {
       sum += array[i] 
    }
    
  return sum - smallestN - biggestN
  }
}

// What I Used: 
// 1- !array & < 2 to check the array's length
// 2- at first I used indexOf to get the index of the lowest and biggest number of the array but I foundout that I dont have to I can just get them and divide them form the sum
// 3- loop on the Array to sum 
// 4- divide the lowest and biggest number
// 
// BestPractice : He used the array.sort to sort the array and on the LOOP he started from index 1 (2nd) to one before the last index (CLEVER)
// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function(a,b) {return a - b;});
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }
//     return total;
//   }
// }
//
//
//
//
//
//
//
//
//
//
//
//