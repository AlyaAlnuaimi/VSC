"use strict";
// Short Circuting && || ?? ?
//let x = name || 0 || "Guest";
//OR WE CAN TYPE IF STATEMENT 
// let x;
// if (name) {
//   x = name;
// } else x = "Guest";
// console.log(x);

// const calculateTax = function (val, tax = 0.14) {
//   //tax = tax ?? 0.14;
//   return val * tax;
// };

// console.log(calculateTax(1000));
// console.log(calculateTax(1000, 0.2));

let address = null; //{floorNo:12,aptNo:'4'}
// let floorNo;
// if (address) {
//   floorNo = address.floorNo;
// } else floorNo = address;
//let floorNo = address && address.floorNo;

// ? : MEANS IS THE ADDDRESS NULL KEEP IT NULL OR IF THE ADDRESS HAS VALUE TAKE THE FLOORNO
let floorNo = address?.floorNo;
let x = name ?? "Guest";
console.log(floorNo);

// function calculateTax(val) {
//   return val * 0.14;
// }

function calculateTaxInEgypt(val) {
  return val * 0.14;
}

function calculateTaxInSA(val) {
  return val * 0.15;
}
// Optional Parameter
function calculateTotalValue(val, f) {
  let shipping = val * 0.1;
  let tax = f(val);
  let subTotal = shipping + val + tax;
  let total = subTotal * 1.05;
  return total;
}

console.log(calculateTotalValue(1000, calculateTaxInEgypt));
console.log(calculateTotalValue(1000, calculateTaxInSA));

// for (let s of studentArray) {
//   console.log(`Name: ${s[1]}, Score: ${s[4] + s[5]}`);
// }
// Arrays Functions
//ForEach
studentArray.forEach((s) => {
  console.log(`Name: ${s[1]}, Score: ${s[4] + s[5]}`);
});
//Filter
let arr = studentArray.filter((s) => s[4] == 5);
console.log(arr);
//Find
let student = studentArray.find((s) => s[4] == 5);
console.log(student);
//FindIndex
let studentIndex = studentArray.findIndex((s) => s[4] == 5);
console.log(studentIndex);
//Map
let studentObjects = studentArray.map((s) => {
  return {
    name: s[1],
    score: s[4],
  };
});
console.log(studentObjects);
//Some
let hasSome = studentArray.some((s) => s[4] == 5);
console.log(hasSome);
//Every
let hasEvery = studentArray.every((s) => s[4] == 5);
console.log(hasEvery);
//Reduce
let total = 0;
for (let s of studentObjects) {
  total += s.score;
}
console.log(total);

total = studentObjects.map((s) => s.score).reduce((t, s) => (t += s));
console.log(total);

let n = [1, 2, 3, 4];
let sum = n.reduce((a, v) => (a += v));
let mult = n.reduce((a, v) => (a *= v), 1);
let smallest = n.reduce((a, v) => (a = v > a ? a : v), n[0]);
let largest = n.reduce((a, v) => (a = v < a ? a : v), n[0]);
console.log(sum);
console.log(mult);
console.log(smallest);
console.log(largest);

let emails = studentArray.map((s) => s[2].trim().toLowerCase());
let uniqueEmails = [];
emails.forEach((e) => {
  if (!uniqueEmails.includes(e)) uniqueEmails.push(e);
});
console.log(uniqueEmails);
// Sets and Maps
let emailsSet = new Set();
emails.forEach((e) => {
  emailsSet.add(e);
});
console.log(emailsSet);

let studentScores = new Map();
studentArray.forEach((s) => {
  const email = s[2].trim().toLowerCase();
  if (!studentScores.has(email)) studentScores.set(email, 0);
  studentScores.set(email, studentScores.get(email) + s[4]);
});

console.log(studentScores);
console.log(isNaN(Number("3.5")));
console.log(0.1 + 0.2 == 0.3);
// Numbers and Dates
// 0.1 Problem
// Requests
// Timers
// Async

// DOM
// Cart Example
// BOM
// OOP
// Closures
// Modules
// JQuery Example
// Regex