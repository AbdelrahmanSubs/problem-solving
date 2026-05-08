// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]


function comp(array1, array2){
    if (array1 === null || array2 === null) {
    return false
  }

  array1.sort(function(a, b) {
  return a - b;
})
  array2.sort(function(a, b) {
  return a - b;
})



  for(let i = 0; i < array1.length; i++) {
    if(array2[i] !== array1[i]*array1[i]) {
      return false
      
    }
  }
  return true
}

// What I used:

// * Checking if one of the arrays is null
// * Sorting both arrays numerically before comparing them
// * Looping through the arrays
// * Checking whether each element in `array2` equals the square of the corresponding element in `array1`
// * Returning `false` immediately if one element doesn't match


// Clever solution after searching 
// return array1.map(v => v * v).every((v, i) => v == array2[i]);