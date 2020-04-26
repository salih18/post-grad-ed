// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

const addAll = (...numbers) => {
  return [...numbers].reduce((acc, val) => acc + val);
};

let result = addAll(2, 5, 6, 7);
console.log(result);

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. ) == 17

const sumAllPrimes = (max) => {
  const store = [];
  const primes = [];
  for (let i = 2; i <= max; ++i) {
    if (!store[i]) {
      primes.push(i);
      for (let j = i < 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return primes.reduce((acc, val) => acc + val);
};

result = sumAllPrimes(10);
console.log(result);

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

const seekAndDestroy = (arr, ...remove) => {
  return arr.filter((elem) => !remove.includes(elem));
};

result = seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
console.log(result);

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

const sortByHeight = (a) => {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
};

result = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log(result);

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

const missingLetters = (str) => {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("");
  str = str.split("");

  if (str[0] != "a") {
    return undefined;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != alphabet[i]) {
      return alphabet[i];
    }
  }
};

result = missingLetters("abce");
console.log(result);

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

const evenOddSums = (arr) => {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
};
result = evenOddSums([50, 60, 60, 45, 71]);
console.log(result);
