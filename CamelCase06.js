// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"

function solution(string) {

  let result = "";
  
  for(let i =0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += ` ${string[i]}`
    } else { 
    result += string[i]
    }
  }
  
  return result;
}

// What I used: 
// 1- toUpperCase function to check if the string on the loop is an Uppercace letter then if it is we push a space before it if not go on :D 

// Best Practice that I found after submitting: 

// Using the Regex to replace the capital word with itself but with a space before (I thought about that but I didn't know that I could replace it with the same letter)

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));

// }

// And here's another clever solution 
// which we can "split" the string and "Map" over it to check every letter if it's capital like we did with putting a space before the capital words 
// Knowen that the return on the map doesn't breake the map loop after that we "join" the string at the return (I think that too much looping idk should search about it)

// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }