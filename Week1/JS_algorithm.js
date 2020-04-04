//1. Reverse the provided string.

const reverseString = (str) => {
  const arr = str.split("");
  const revArr = arr.reduce((acc, val) => {
    acc.unshift(val);
    return acc;
  }, []);
  return revArr.join("");
};

const reversed = reverseString("hello");
console.log(reversed)

//2.Truncate a string (first argument)

//if it is longer than the given maximum string length (second argument).
//Return the truncated string with a ... ending.

const truncateString = (str, maxLength) => {
  if (str && str.length > maxLength) {
    return str.substr(0, maxLength) + "...";
  }
  return str;
};
const truncated = truncateString(
  "A-tisket a-tasket A green and yellow basket",
  8
);
console.log(truncated);

// 3. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

const mutation = (arr) => {
  const arrStr_1 = arr[0].toLowerCase().split("");
  const arrStr_2 = arr[1].toLowerCase().split("");
  return arrStr_2.every((letter) => {
    return arrStr_1.indexOf(letter) !== -1;
  });
};

const mutuated = mutation(["hello", "hee"]);
console.log(mutuated);

//4. Create a function that looks through an array (first argument) and
// returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.

const findElement = (arr, fn) => {
  const num = arr.find(fn);
  return num;
};

const result = findElement([1, 2, 3, 4], (num) => num % 5 === 0);
console.log(result)



// 5.Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

const bouncer = (arr) => {
   const result = arr.filter(el => Boolean(el))
   return result
}

const exceptFalsy = bouncer([7, "ate", "", false, 9]);
console.log(exceptFalsy)
