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
function largestNumber(arr) {
    let largeNumber = arr[0];
    for(const num of arr) {
        if(num > largeNumber) {
            largeNumber = num;
        }
    }
    return largeNumber;
}

console.log(largestNumber([1, 2, 3,10,100,500]));





