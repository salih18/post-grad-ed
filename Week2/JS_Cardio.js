// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => {
  const arr = str.split("");
  const revArr = arr.reduce((acc, val) => {
    acc.unshift(val);
    return acc;
  }, []);
  return revArr.join("");
};

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {
  return str == str.split("").reverse().join("");
};

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (int) => {
  return int.toFixed(0).split("").reverse().join("") - 0;
};

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

const capitalizeLetters = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const result = capitalizeLetters("i love javascript");

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
const countOccurence = (arr) => {
  return arr.reduce((obj, item, index) => {
    if (!obj[item]) {
      obj[item] = { count: 0 };
    }
    obj[item].count++;
    return obj;
  }, {});
};
const maxCharacter = (str) => {
  const arr = str.toLowerCase().split("");
  const countCharacters = countOccurence(arr);
  const result = Object.keys(countCharacters).sort((a, b) => {
    return countCharacters[b].count - countCharacters[a].count;
  });
  return result[0];
};

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
