//21-05-2024

//Question-1://todo? Print your birthday in the console using the Date object.
let birthday = new Date("2003-08-10");
console.log(birthday);//2003-08-10T00:00:00.000Z

//Question-2//todo? Print the current time in the console using the Date object.
let myDate = new Date();
console.log(myDate.toTimeString());//09:35:15 GMT+0530 (India Standard Time)


//question-3//todo? Print your current age in the console using the Date object.
let birthYear = 2003;
let cuurentYear = 2024;
let age = cuurentYear - birthYear;
console.log( age );//21


//Q: What does the push method do in JavaScript arrays?
let numArray = [1,13,21,17,19];
console.log(numArray);//[ 1, 13, 21, 17, 19 ]
numArray.push  ("30");
console.log(numArray);//[ 1, 13, 21, 17, 19, '30' ]

//Q: What does the pop method do in JavaScript arrays?
console.log(numArray);//[ 1, 13, 21, 17, 19, '30' ]
console.log(numArray.pop());//30
console.log(numArray);//[ 1, 13, 21, 17, 19 ]

//Q: Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);//[ 'apple', 'banana', 'mango', 'orange' ]

//Q: Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop());//5

//Q: What will the following code output?
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.pop();
console.log(colors);//[ 'red', 'green', 'blue' ]

//Q: How can you add multiple elements to the end of an array in one push call?
//Ans:let 

//Q: What will be the result of the following code?
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);//[ 1 ]

//Q: Explain the following code:
let letters = ["a", "b"];
letters.push("c", "d");
let lastLetter = letters.pop();
console.log(letters);//[ 'a', 'b', 'c' ]
console.log(lastLetter);//d

//Q.How can you check the length of an array after using push or pop?
//ans:console.log(randomArray[randomArraylength-1]);

//Q: What will be the output of the following code?
let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());
console.log(myArray);//[ 10, 20, 30 ]

//22-05-2024

//Exercise 1: Manipulate an Array

//Create an array of numbers.
//Add a number to the end.
//Remove the first number

//Ans: 
let nums = [1,8,12,15,54];
nums.push(67);
console.log(nums);//[ 1, 8, 12, 15, 54, 67 ]
console.log(nums.shift());//1
console.log(nums);//[ 8, 12, 15, 54, 67 ]

//Exercise 2: Combining Arrays

//Create two arrays of different fruit types.
//Merge them into one array.
//Remove any duplicate fruits


//Ans:

let fruits1 = ["apple","grape","banana"];
let fruits2 = ["watermelon","mango","banana"];
let newfruits = fruits1.concat(fruits2);
console.log(newfruits);//[ 'apple', 'grape', 'banana', 'watermelon', 'mango', 'banana' ]
 












