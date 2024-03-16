const course = {
    name: "shruti",
    age: "21",
    fees: 2000,
    language: function () {
        console.log(`${this.name},is web developer`);
        console.log(this);
    },

};
// course.language();
// course.name = "darshik";
// course.language();

// console.log(this);

function one() {
    let username = "hiii"
    console.log(this.username);
};
one();

const two = function () {
    let username = "hiii"
    console.log(this.username);
};
two();

const three = () => {
    let username = "hiii"
    console.log(this.username);
};
three();

// arrow function 

const abc = (num1, num2) => {
    return num1 + num2
};
console.log(abc(2, 4));

const xyz = (num1, num2) => num1 + num2;
console.log(xyz(5, 5));

const wer = (num1, num2) => (num1 + num2);
console.log(wer(6, 6));

const ret = (name) => ({ name: "shruti" });
console.log(ret());

const aaa = [1, 2, 3, 4];
const rrr = () => (aaa[1]);
console.log(rrr());