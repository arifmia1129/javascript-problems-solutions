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

const concatString = (strArr)=>{
    return strArr.join("");
}

// console.log(concatString(["arif", "binu"]));


// Problem 5:
// Write a function that takes a number as input and returns true if the number is even, and false otherwise.

function isEven (num) {
    return num % 2 === 0;
}

// console.log(isEven(4));

// Problem 6:
// Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.

const numbersArrSum = (arr) => {
    let sum = 0;

    for(const numEl of arr) {
        sum += numEl;
    }

    return sum;
}

// console.log(numbersArrSum([1, 2, 3, 4, 5]));


// Problem 7:
// Write a function that takes a string as input and returns the number of vowels in the string.

function countVowel(str) {
    const vowels = "aeiou";
    let count = 0;

    for(const char of str.toLowerCase()){
        if(vowels.includes(char)){
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

    for (const number of numberArr){
        if(number > 0) {
            newArr.push(number);
        }
    }

    return newArr;
}

// console.log(positiveNumbers([1, 2, 3, -1, 0, 100, -100]));


// Problem 9:
// Write a function that takes a string as input and returns true if the string is a palindrome, and false otherwise.

const isPalindrome = (str) => {
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}

console.log(isPalindrome("madam"));














