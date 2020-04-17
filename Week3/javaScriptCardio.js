// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(str) {
  return str
    .split(" ")
    .map((word) => word)
    .sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord("Hi there, my name is Brad"));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  return arr.reduce(
    (acc, _, i) => (i % len ? acc : [...acc, arr.slice(i, i + len)]),
    []
  );
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return [].concat(...arrays);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return (
    str1.replace(/\W+/g, "").toLowerCase().split("").sort().join("") ===
    str2.replace(/\W+/g, "").toLowerCase().split("").sort().join("")
  );
}
console.log(isAnagram("Dormitory", "dirtyroom"));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

// From stackoverflow

function letterChanges(str) {
  str = str.replace(/[a-z]/gi, function (char) {
    //call replace method
    char = String.fromCharCode(char.charCodeAt(0) + 1); //increment ascii code of char variable by 1 .FromCharCode() method will convert Unicode values into character
    if (char == "{" || char == "[") char = "a"; //if char values goes to "[" or"{" on incrementing by one as "[ ascii value is 91 just after Z" and "{ ascii value is 123 just after "z" so assign "a" to char variable..
    if (/[aeiuo]/.test(char)) char = char.toUpperCase(); //convert vowels to uppercase
    return char;
  });
  return str;
}

console.log(letterChanges("hello there"));
