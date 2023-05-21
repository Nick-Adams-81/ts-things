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
    if (str.length % 2 !== 0 || str.length === 0)
        return false;
    let stack = [];
    for (let c of str.split("")) {
        let lastIndex = stack[stack.length - 1];
        if (c === "{" || c == "(" || c == "[")
            stack.push(c);
        else if (c == "}" && lastIndex == "{")
            stack.pop();
        else if (c == ")" && lastIndex == "(")
            stack.pop();
        else if (c == "]" && lastIndex == "[")
            stack.pop();
    }
    if (stack.length === 0)
        return true;
    return false;
};
console.log(balancedBrackets("{}["));
const removeVowels = (str) => {
    return str.replace(/[aeiou]/gi, "");
};
console.log(removeVowels("hello world"));
const countValleys = (str) => {
    let splitStr = str.split("");
    let elevation = 0;
    let valleys = 0;
    for (let chars of splitStr) {
        if (chars == "u") {
            if (elevation === -1) {
                valleys++;
            }
            elevation++;
        }
        if (chars == "d") {
            elevation--;
        }
    }
    return valleys;
};
console.log(countValleys("dududu"));
const primeNubers = (limit) => {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
};
console.log(primeNubers(40));
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseString('hello world'));
