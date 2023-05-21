// number type
let id: number = 5;

// string type
let myName: string = "Nick";

// splitting the string into an array
let splitStr: string[] = myName.split("");
// looping through the split string array
// for (let ch of splitStr) {
//   console.log(ch);
// }
// boolean type
let isPublished: boolean = true;
//console.log(isPublished);

// array type
let nums: number[] = [1, 2, 3, 4, 5];
//console.log(nums);

// array any type
let myArr: any[] = [1, true, "hello"];

// tuple
let person: [number, string, boolean] = [1, "nick", true];

// union
let pid: number | string = 2;

const balancedBrackets = (str: string): boolean => {
  if (str.length % 2 !== 0 || str.length === 0) return false;
  let stack: string[] = [];

  for (let c of str.split("")) {
    let lastIndex = stack[stack.length - 1];
    if (c === "{" || c == "(" || c == "[") stack.push(c);
    else if (c == "}" && lastIndex == "{") stack.pop();
    else if (c == ")" && lastIndex == "(") stack.pop();
    else if (c == "]" && lastIndex == "[") stack.pop();
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(balancedBrackets("{}["));

const removeVowels = (str: string): string => {
  return str.replace(/[aeiou]/gi, "");
};
console.log(removeVowels("hello world"));

const countValleys = (str: string): number => {
  let splitStr: string[] = str.split("");
  let elevation: number = 0;
  let valleys: number = 0;
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

const primeNubers = (limit: number): number[] => {
  let primes: number[] = [];
  for (let i: number = 2; i <= limit; i++) {
    let isPrime: boolean = true;
    for (let j: number = 2; j <= i / 2; j++) {
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

const reverseString = (str: string): string => {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello world'))
