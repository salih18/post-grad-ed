As I mentioned earlier, if the object that you want to clone has reference data type inside it, you can not clone them by spread and Object asssign method. Those methods can only copy the primitive data types like string, numbers, however the reference type property is just shared between the object and new cloned object. This type of copying is called shallow copy.

There is also deep copy method, if you want to clone reference type property of an object. By deep copying, all the properties including references can be cloned.

The most common way to do deep cloning is JSON.parse and JSON.stringfy.


const obj = { a: 1, b: {c:2} };

const clonedObjBySpread = { ...obj }
const clonedObjByAssign = Object.assign({}, obj);
const clonedObjByJSON= JSON.parse(JSON.stringify(obj))

obj.b.c = 5;

console.log(obj)                //{ a: 1, b: { c: 5 } }
console.log(clonedObjBySpread)  //{ a: 1, b: { c: 5 } }
console.log(clonedObjByAssign)  //{ a: 1, b: { c: 5 } }
console.log(clonedObjByJSON)    //{ a: 1, b: { c: 2 } }

As you see after copying with JSON method, the object we cloned is not changed.
However this method doesn't work if the object includes functions, symbols, undefined, Infinity etc..

const obj = { a: 1, b: function(){return this.a + 10} };

const clonedObjByJSON= JSON.parse(JSON.stringify(obj))

console.log(obj)  //{ a: 1, b: [Function: b] }
console.log(clonedObjByJSON) // { a: 1 }

Also if there is a Date inside the object, this method convert Date object to string.

Besides, if the object that you want to copy has a property which reference itself this method throws an error.

If you want to clone all properties of a object, you should create your own function to clone deeply, or you can choose a 
library like lodash and its clonedeep method to clone an object deeply.

May be in the future, JS will have a native method that allows us to have deep clone of an object just by typing 
const cloned = Object.clone('deep clone', obj) :)
Actually, NodeJS has a experimental native method which is called 'Structured Cloning'. 

