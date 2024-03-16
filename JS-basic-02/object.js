// OBJECT OF TWO PART:
// (1)Constroucter
//    (a)singlrtone object
// (2)literal
//literal two part og object define: 
//first: Object.create
// second type: 
const makey = Symbol("keys")
const abc = {
    name: "darshik",
    "full name": "darshik bbambhroliya",
    [makey]: "key1",
    age: 18,
    hobby: "game play",
    collage: "vivekaNand",
    sub: [1, 2, 3, 4, 5]
};

// console.log(abc);
// console.log(abc.name);
// console.log(abc["full name"]);
// console.log(typeof abc.makey);
// console.log(abc[makey]);

abc.name = "darshil";
console.log(abc);

Object.freeze(abc);
abc.name = "dakshu";
// console.log(abc);

abc.greeting = function () {
    console.log("hello what is you name?");
};
abc.greetingTwo = function () {
    console.log(`my name is ${this.name}`);
}
console.log(abc.greeting);
console.log(abc.greetingTwo);