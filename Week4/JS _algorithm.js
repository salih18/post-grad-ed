//Search and Replace
const myReplace = (str, before, after) => {
  const index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  str = str.replace(before, after);

  return str;
};

let result = myReplace(
  "A quick brown fox jumped over the lazy dog",
  "jumped",
  "leaped"
);
console.log(result);

//DNA Pairing

const pairElement = (str) => {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  const arr = str.split("");
  return arr.map((x) => [x, pairs[x]]);
};

result = pairElement("GCG");
console.log(result);

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
const uniteUnique = (...arrays) => {
  const flatArray = [].concat(...arrays);
  return [...new Set(flatArray)];
};

result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

// Binary Agents
//Return an English translated sentence of the passed binary string.

const binaryAgent = (binaryString) => {
  const binaryToString = (binary) =>
    String.fromCharCode(Number.parseInt(binary, 2));

  return binaryString
    .split(" ")
    .map((binary) => binaryToString(binary))
    .join("");
};

result = binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
);
console.log(result);

// Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

const truthCheck = (collection, pre) => {
  return collection.every((obj) => obj[pre]);
};

result = truthCheck(
  [
    { name: "Pete", onBoat: true },
    { name: "Repeat", onBoat: true, alias: "Repete" },
    { name: "FastForward", onBoat: true },
  ],
  "onBoat"
);
console.log(result);
