//object parse
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

document.getElementById("demo").innerHTML = obj.name;

//array parse

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

console.log(myArr[0]);

document.getElementById("demo").innerHTML = myArr[0];

//date parse

const D = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

const d1 = JSON.parse(D);

d1.birth = new Date(d1.birth);

console.log(d1.birth);

//reviver function
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

const fun =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const f = JSON.parse(fun);
f.age = eval("(" + f.age + ")");

console.log(f.age);

//stringfy

const myJSON = JSON.stringify(obj);

const js = JSON.stringify(text);

console.log(typeof js);

console.log(typeof myJSON);

// Storing data:
const my = { name: "John", age: 31, city: "New York" };
const myJS = JSON.stringify(my);
localStorage.setItem("testJSON", myJS);

// Retrieving data:
let te = localStorage.getItem("testJSON");
let ob = JSON.parse(te);
document.getElementById("d").innerHTML = ob.name;

//exceptions for stringfy
//Stringify Dates

const o = { name: "John", today: new Date(), city: "New York" };
const m = JSON.stringify(o);
console.log(m);

const j = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
j.age = j.age.toString();
const N = JSON.stringify(j);
console.log(N);
