// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
//getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.

const getIndexToIns = (arr, num) => arr.filter((val) => num > val).length;

let result = getIndexToIns([10, 20, 30, 40, 50], 45);

console.log(result);

// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

const booWho = (bool) => typeof bool === "boolean";

result = booWho(null);
console.log(result);

//Check if a string (first argument, str) ends with the given target string (second argument, target).

const confirmEnding = (str, target) => {
  const endingPiece = str.slice(str.length - target.length);
  return endingPiece === target;
};

result = confirmEnding("Bastian", "n");

console.log(result);

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

const findLongestWordLength = (str) => {
  let lengths = str.split(" ").map((word) => word.length);
  return Math.max(...lengths);
};

result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

result = titleCase("I'm a little tea pot");
console.log(result)
