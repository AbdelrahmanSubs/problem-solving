// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  let VowSum = 0;

  for(let i=0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
    VowSum += 1
  }
  return VowSum;
}


//Best Practice that I found after I submitted the solution: 
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// He just used the "match" function to create an array form the str arry with the vow's and when it's finished it get it's length CLEVER