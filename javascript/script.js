"use strict";

// Set 2:

// 1.	Write a function removeVowels(str) that takes a string as input and returns a new string where all the vowels (a, e, i, o, u) are removed.
// Example:
// removeVowels("javascript");  // "jvscrpt"

const removeVowels = (str) => {
  let string = str.split("");
  let removeEL = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "a" &&
      string[i] !== "e" &&
      string[i] !== "i" &&
      string[i] !== "o" &&
      string[i] !== "u" &&
      string[i] !== "A" &&
      string[i] !== "E" &&
      string[i] !== "I" &&
      string[i] !== "O" &&
      string[i] !== "U"
    ) {
      removeEL.push(string[i]);
    }
  }
  removeEL = removeEL.join("");
  console.log(removeEL);
};
removeVowels("javascript");

// 2.	 Write a function isPangram(str) that takes a string as input and returns true if the string is a pangram (contains every letter of the alphabet at least once), and false otherwise.
// Example:
// isPangram("Hello world");                                       // false

const isPangram = (str) => {
  let strArr = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello world"));

// 3.	Write a function getUniqueValues(arr) that takes an array as input and returns a new array with only the unique values (removing any duplicates).
// Example:
// getUniqueValues(["a", "b", "a", "c", "b"]);         // ["a", "b", "c"]

const getUniqueValues = (arr) => {
  let array = [...new Set(arr)];
  console.log(array);
};
getUniqueValues(["a", "b", "a", "c", "b"]);

// 4.	Write a function findCommonElements(arr1, arr2) that takes two arrays as input and returns a new array containing the common elements that appear in both arrays.
// Example:
// findCommonElements(["apple", "banana", "pear"], ["banana", "orange"]);    // ["banana"]

const findCommonElements = (arr1, arr2) => {
  let array1 = arr1.sort();
  let array2 = arr2.sort();
  let commonEl = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        commonEl.push(array1[i]);
      }
    }
  }
  console.log(commonEl);
};
findCommonElements(["apple", "banana", "pear"], ["banana", "orange"]);

// 5.	Write a function isPerfectNumber(n) that takes a positive integer n as input and returns true if n is a perfect number, and false otherwise. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself).
// Example:
// isPerfectNumber(28);    // true (28 = 1 + 2 + 4 + 7 + 14)

const isPerfectNumber = (number) => {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("true");
  } else {
    console.log("false");
  }
};
isPerfectNumber(28);

// 6.	Create a countdown timer using JavaScript and the DOM. The timer should start from a specified value and update every second until it reaches zero.

const timerEL = document.getElementById("timer");

let min = 10;
let seconds = 59;
let t = setInterval(function () {
  if (seconds >= 0) {
    seconds--;
    if (seconds == -1 && min > 0) {
      seconds = 59;
      min--;
    }
    if (seconds >= 0) {
      timerEL.innerHTML = `${min < 10 ? "0" + min : min}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }
  }
}, 1000);

// 7.	Implement a script that highlights the active navigation link based on the user's current scroll position on a web page.
// 8.	Write JavaScript code that dynamically adds a CSS class to an HTML element when it is clicked and removes the class when another element is clicked.
// 9.	Create a function that dynamically adds a new option to a select dropdown menu in the DOM, using user input.
// 10.	Implement a script that detects and handles browser window resize events using JavaScript and the DOM.
