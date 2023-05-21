"use strict";
// number type
let id = 5;
console.log("ID:", id);
// string type
let myName = "Nick";
console.log(myName);
// splitting the string into an array
let splitStr = myName.split("");
// looping through the split string array
for (let ch of splitStr) {
    console.log(ch);
}
// boolean type
let isPublished = true;
console.log(isPublished);
// array type
let nums = [1, 2, 3, 4, 5];
console.log(nums);
// array any type
let myArr = [1, true, "hello"];
// tuple
let person = [1, "nick", true];
// union
let pid = 2;
pid = '5';
