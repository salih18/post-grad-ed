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
