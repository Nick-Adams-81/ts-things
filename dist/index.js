"use strict";
// number type
let id = 5;
// string type
let myName = "Nick";
// splitting the string into an array
let splitStr = myName.split("");
// looping through the split string array
// for (let ch of splitStr) {
//   console.log(ch);
// }
// boolean type
let isPublished = true;
//console.log(isPublished);
// array type
let nums = [1, 2, 3, 4, 5];
//console.log(nums);
// array any type
let myArr = [1, true, "hello"];
// tuple
let person = [1, "nick", true];
// union
let pid = 2;
const balancedBrackets = (str) => {
    if (str.length % 2 !== 0)
        return false;
    let myArray = [];
    let splitStr = str.split("");
    for (let c of splitStr) {
        let lastIndex = myArray[myArray.length - 1];
        if (c === "{" || c == "(" || c == "[")
            myArray.push(c);
        else if (c == "}" && lastIndex == "{")
            myArray.pop();
        else if (c == ")" && lastIndex == "(")
            myArray.pop();
        else if (c == "]" && lastIndex == "[")
            myArray.pop();
    }
    if (myArray.length === 0)
        return true;
    return false;
};
console.log(balancedBrackets("(){}"));
