// Copying an Object in Javascript

// In this post I am going to talk about 2 methods of copying objects in JS.
// Objects are stored by reference in JS. This means that if you want to assign the object to the other variable, actually you are just assigning the object address in memory to the new created variable.
const obj = { a: 1, b: 2 };
const youWantToCloneAboveObj = obj
youWantToCloneAboveObj.a = 2

console.log(youWantToCloneAboveObj) // { a: 2, b: 2 }
console.log(obj) // { a: 2, b: 2 }

// What if we want to create a copy of the object? 

// 1. Spread Operator

const obj = { a: 1, b: 2 };

const clonedObj = { ...obj };

clonedObj.a = 5

console.log(obj) // { a: 1, b: 2 }
console.log(clonedObj) // { a: 5, b: 2 }
 

// 2. Object.assign

const obj = { a: 1, b: 2 };
const clonedObj = Object.assign({}, obj);

obj.a = 5

console.log(obj) // { a: 5, b: 2 }
console.log(clonedObj) // { a: 1, b: 2 }


// As you see it is easy to copy an object by using spread operator and Object.assign. However if the object that you want to copy has references to the other objects inside it, by using those methods you cannot copy those objects as a whole.

const obj = { a: 1, b: {c:2} };

const clonedObjBySpread = { ...obj }
const clonedObjByAssign = Object.assign({}, obj);

obj.b.c = 5;

// The other cloned objects both are changed to

console.log(obj) //{ a: 1, b: { c: 5 } }
console.log(clonedObjBySpread) //{ a: 1, b: { c: 5 } }
console.log(clonedObjByAssign) //{ a: 1, b: { c: 5 } }

// This shows that if the objects that you want to copy has some objects these methods copy only the reference addresses.





