// function and parameters 


// function myName() {
//     console.log("s");
//     console.log("h");
//     console.log("r");
//     console.log("u");
//     console.log("t");
//     console.log("i");
// };
// myName();

function sayTwo(num1, num2) {
    console.log(num1 + num2);
};
sayTwo(2, 2);

function sayName(one, two) {
    let xyz = one + two;
    return xyz
};
console.log(sayName(10, 5));

function sayWorld(ab, cd) {
    return ab + cd
};
console.log(sayWorld(20, 2));

function names(username = "shruti") {
    if (!username) {
        console.log("logged in username");
        return
    }
    return `${username} is my name`
};
console.log(names());

// rest operatore 

function addToCart(...cart) {
    return cart
};
console.log(addToCart(200, 400, 600));

const details = {
    names: "shruti",
    fees: 125,
};

function addObject(newDetails) {
    return `my name is ${newDetails.name},and courses fees ${newDetails.fees}`
};
// console.log(addObject(details));
console.log(addObject({ name: "harshi", fees: "250" }));

// const newArray = [200, 400, 600, 800, 1000];
function myArray(firstArray) {
    return firstArray[2]
};
// console.log(myArray(newArray));
console.log(myArray([200, 400, 500, 900, 1000]));