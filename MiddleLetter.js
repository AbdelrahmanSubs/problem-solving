// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

function getMiddle(s) {
  let middleL = s.length % 2;

   if (!middleL) {
     return `${s[(s.length / 2) - 1]}${s[s.length / 2]}`
   } else {
    return s[Math.floor(s.length / 2)];
   }
}

// What I Used: 
// 1- % to get the Modulo of the "s" length
// 2- Math.Floor to get the 
// 3- The Best Bractice that I found after submitting the solution
//function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
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