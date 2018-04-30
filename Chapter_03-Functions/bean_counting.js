/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/
function countBs(string) {
  let result = 0;
  for(let index = 0; index < string.length; index++) {
    if (string[index] == "B") {
      result++;
    }
  }
  return result;
}
/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

function countChar(string, letter) {
  let result = 0;
  for(let index = 0; index < string.length; index++) {
    if (string[index] == letter) {
      result++;
    }
  }
  return result;
}



console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
