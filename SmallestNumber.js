// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(arr) {
  
  let smallestN= arr[0];
  
  for (let i = 1; i<arr.length; i++) {
    if(arr[i] < smallestN) {
      smallestN = arr[i];
    } 
  }
  
  return smallestN;
}

// What I Used : 
// 1- on line 11 I should start from the first item on the array it's eazier and will use less resourses
// 2- on line 13 starting from the 2nd item on the array because we're already started the virable form the 1st item on the array
// 3- on line 14 is the core of the solution because we're usign the loop to compare the arr's items to get the smallest number
// 4- The Best Bractice that I found after submitting the solution that I can use a builtin function that will get the smallest number eazy 
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }
// 