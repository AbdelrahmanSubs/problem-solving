// aden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    //MY SOLUTION STARTS FORM THERE
     return this.split(" ").map(twt => twt[0].toUpperCase()+twt.slice(1)).join(" ")
   }
  }
);

// What I used: 
// At first I used looping to change every single item of the array after spliting the string 
// BUT.. I think about how I could make this code faster and easy to read and I rememberd that we have "Map" to loop on the array.
// And guess what? we have the cleverest solution for the 2nd time there's noone done it better :D