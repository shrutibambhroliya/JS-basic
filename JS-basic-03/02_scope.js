const a = 100;
let b = 200;
if (true) {
    const a = 10;
    let b = 20;

    console.log("local scop:", a);
};
console.log("globle scope:", a);
// console.log(b);

function one() {
    const abc = "hello";
    function two() {
        const xyz = "india";
        console.log(abc);
    };
    // console.log(xyz);
    two();
};
one();


if (true) {
    const name = "shruti";
    if (name === "shruti") {
        const website = " youtube";
        console.log(name + website);
    }
    // console.log(website);
}
// console.log(name);

// **************************intresting**********************
// upar access  ho raha
console.log(addOne(9));
function addOne(value) {
    return value + 1
};

// addTwo(5) upar access nai ho raha
// expression function 
const addTwo = function (value) {
    return value + 2
};
console.log(addTwo(5));
