// constructer type Object: 

// Singletone object:
const abc = new Object();
// console.log(abc);

// Non-Singletone object:
const xyz = {};
xyz.id = "123";
xyz.name = "kite";
xyz.fullName = "fine";
xyz.age = 22;
// console.log(xyz);


const info = {
    email: "sb@123",
    fullName: {
        name: {
            firstName: "shruti",
            lastName: "bambhroliya",
        }
    }
};

// object combine kaise kare 
// console.log(info.fullName.name.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = { obj1, obj2, obj3 };
// const obj4 = Object.assign(obj1, obj2, obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);


// NESTED OBJECT 
const aaa = [
    {
        id: 1,
        email: "one"
    },
    {
        id: 2,
        email: "two"
    },
    {
        id: 3,
        email: "three"
    },
    {
        id: 4,
        email: "four"
    }
];
// Nested object define
// console.log(aaa[0]);
// console.log(aaa[1].email);

// console.log(xyz);
// console.log(Object.keys(xyz));
// console.log(Object.values(xyz));
// console.log(Object.entries(xyz));
// console.log(xyz.hasOwnProperty("name"));

//////////////// OBJECT DESTRUCTURING /////////////

const sss = {
    language: "javascript",
    teacher: "hitesh sir",
    platform: "youtube",
};
// console.log(sss.platform);
const { platform: app } = sss;
console.log(app);
const { language: lang } = sss;
console.log(lang);
