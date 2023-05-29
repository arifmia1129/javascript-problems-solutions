// Problem 1:
// Write a function that takes two numbers as input and returns their sum.

// function sumNumbers(num1, num2) {
//     return num1 + num2;
// }

// const sum = sumNumbers(10, 20);

// console.log(sum);

// Problem 2:
// Write a function that takes an array of numbers as input and returns the largest number in the array.

// technique:-1

// function largestNumber (arr) {
//     return Math.max(...arr);
// }

// console.log(largestNumber([1, 2, 3,10,100,5]));

// technique:-2
// function largestNumber(arr) {
//     let largeNumber = arr[0];
//     for(const num of arr) {
//         if(num > largeNumber) {
//             largeNumber = num;
//         }
//     }
//     return largeNumber;
// }

// console.log(largestNumber([1, 2, 3,10,100,500]));

// Problem 3:
// Write a function that takes a string as input and returns the reverse of the string.

// const reverseString = (str)=> {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Arif"));

// Problem 4:
// Write a function that takes an array of strings as input and returns the concatenation of all the strings.

const concatString = (strArr) => {
  return strArr.join('');
};

// console.log(concatString(["arif", "binu"]));

// Problem 5:
// Write a function that takes a number as input and returns true if the number is even, and false otherwise.

function isEven(num) {
  return num % 2 === 0;
}

// console.log(isEven(4));

// Problem 6:
// Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.

const numbersArrSum = (arr) => {
  let sum = 0;

  for (const numEl of arr) {
    sum += numEl;
  }

  return sum;
};

// console.log(numbersArrSum([1, 2, 3, 4, 5]));

// Problem 7:
// Write a function that takes a string as input and returns the number of vowels in the string.

function countVowel(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowel("arif"));

// Problem 8:
// Write a function that takes an array of numbers as input and returns a new array containing only the positive numbers.

const positiveNumbers = (numberArr) => {
  let newArr = [];

  for (const number of numberArr) {
    if (number > 0) {
      newArr.push(number);
    }
  }

  return newArr;
};

// console.log(positiveNumbers([1, 2, 3, -1, 0, 100, -100]));

// Problem 9:
// Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.

const isPalindrome = (str) => {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
};

// console.log(isPalindrome("madam"));

// Problem 10:
// Write a function that takes an array of strings as input and returns the number of strings with more than 5 characters.

const sumMoreThanFiveString = (stringArr) => {
  let count = 0;

  for (const str of stringArr) {
    if (str.length > 5) {
      count += 1;
    }
  }

  return count;
};

// console.log(sumMoreThanFiveString(["arif", "mdarif", "binu", "sadik", "hannan", "tabassum"]));

// Problem 11:
// Write a function that takes an array of numbers as input and returns the average of all the numbers.

const arrAvg = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

// console.log(arrAvg([1, 2,3]));

// Problem 12:
// Write a function that takes a number as input and returns true if it is a prime number, and false otherwise.

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(3));

// Problem 13:
// Write a function that takes a string as input and returns the number of words in the string.

function countStringWords(str) {
  return str.trim().split('').length;
}

// console.log(countStringWords("arif"));

// Problem 14:
// Write a function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
function sortArr(strArr) {
  return strArr.sort();
}

// console.log(sortArr(["binu", "arif", "soikot"]));

// Problem 15:
// Write a function that takes a number as input and returns the factorial of that number.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let fac = 1;

  for (let i = 2; i <= number; i++) {
    fac *= i;
  }

  return fac;
}

// console.log(factorial(5));

// Problem 16:
// Write a function that takes two strings as input and returns true if they are anagrams, and false otherwise.

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

// console.log(areAnagrams("arif", "fair"));

// Problem 17:
// Write a function that takes an array of numbers as input and returns the product of all the numbers.

function calculateProduct(numArr) {
  return numArr.reduce((acc, curr)=> {
    return acc + curr;
  },1)
}

// console.log(calculateProduct([1, 2, 3]));

// Problem 19:
// Write a function that takes an array of strings as input and returns a new array with the lengths of the strings.

function elementLengthArr (strArr) {
  return strArr.map(str => str.length);
}

console.log(elementLengthArr(["arif", "binu", "soikot"]));


