// number type
let id: number = 5;
console.log("ID:", id);

// string type
let myName: string = "Nick";
console.log(myName);
// splitting the string into an array
let splitStr: string[] = myName.split("");
// looping through the split string array
for (let ch of splitStr) {
  console.log(ch);
}
// boolean type
let isPublished: boolean = true;
console.log(isPublished);

// array type
let nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);

// array any type
let myArr: any[] = [1, true, "hello"];

// tuple
let person: [number, string, boolean] = [1, "nick", true];

// union
let pid: number | string = 2;
pid = '5'
