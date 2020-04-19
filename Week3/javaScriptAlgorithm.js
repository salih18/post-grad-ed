//Sum All Numbers in a Range

const sumAll = (arr) => {
  const min = arr[0];
  const max = arr[1];
  return (max * (max + 1) - (min - 1) * min) / 2;
};

let result = sumAll([1, 4]);
console.log(result);

//Diff Two Arrays

function diffArray(arr1, arr2) {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
}

result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result);
result = diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

console.log(result);

//Wherefore art thou

function whatIsInAName(collection, source) {
  const arr = collection.filter((item) =>
    Object.entries(source).every(([key, val]) => item[key] === val)
  );
  return arr;
}

result = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
console.log(result);

// Drop it

function dropElements(arr, func) {
  const toBeSliced =
    arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length;
  return arr.slice(toBeSliced);
}

result = dropElements([1, 2, 3], function (n) {
  return n > 3;
});

console.log(result);

// Convert HTML

function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((word) => (entities[word] ? entities[word] : word))
    .join("");
}

result = convertHTML("Dolce & Gabbana");

console.log(result);
