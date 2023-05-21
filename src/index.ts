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
  let myArray: string[] = [];
  let splitStr: string[] = str.split("");

  for (let c of splitStr) {
    let lastIndex = myArray[myArray.length - 1];
    if (c === "{" || c == "(" || c == "[") myArray.push(c);
    else if (c == "}" && lastIndex == "{") myArray.pop();
    else if (c == ")" && lastIndex == "(") myArray.pop();
    else if (c == "]" && lastIndex == "[") myArray.pop();
  }

  if (myArray.length === 0) return true;
  return false;
};

console.log(balancedBrackets("{}"));

const removeVowels = (str: string): string => {
    return str.replace(/[aeiou]/gi, '')
}
console.log(removeVowels('hello world'))
