// a. Print odd numbers in an array
// 1, anonymous;
let valuesArr = [1, 2, 3, 4, 5];
let anonymousOddNumber = [];
let getAnonymousOddNumber = function (valuesArr) {
  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i] % 2 !== 0) {
      anonymousOddNumber.push(valuesArr[i]);
    }
  }
  console.log(anonymousOddNumber);
};
getAnonymousOddNumber(valuesArr);

//2, arrow function
let arrowOddNumber = [];
let getArrowOddNumber = (valuesArr) => {
  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i] % 2 !== 0) {
      arrowOddNumber.push(valuesArr[i]);
    }
  }
  console.log(arrowOddNumber);
};
getArrowOddNumber(valuesArr);

// 3, IIFE
let IIFEOddNumber = [];
(function (valuesArr) {
  for (let i = 0; i < valuesArr.length; i++) {
    if (valuesArr[i] % 2 !== 0) {
      IIFEOddNumber.push(valuesArr[i]);
    }
  }
  console.log(IIFEOddNumber);
})(valuesArr);

// b.Convert all the strings to title caps in a string array
// 1, anonymous;
let titleCapsArr = ["java Script", "type script", "HELLO WORLD"];

let getAnonymousTitleCaps = function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
let anonymousTitleCaps = titleCapsArr.map(getAnonymousTitleCaps);
console.log(anonymousTitleCaps);

//2, arrow function
let getArrowTitleCaps = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
let arrowTitleCaps = titleCapsArr.map(getArrowTitleCaps);
console.log(arrowTitleCaps);

//3, IIFE function
let IIFETitleCaps = (function (array) {
  let result = array.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });
  return result;
})(titleCapsArr);

console.log(IIFETitleCaps);

// C.Sum of all numbers in an array

// 1, anonymous
let anonymousSum = 0;
let getAnonymousValues = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    anonymousSum += arr[i];
  }
};
getAnonymousValues(valuesArr);
console.log(anonymousSum);

//2, arrow
let arrowSum = 0;
let getArrowValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arrowSum += arr[i];
  }
};
getArrowValues(valuesArr);
console.log(arrowSum);

//3, IIFE
let IIFESum = 0;
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    IIFESum += arr[i];
  }
})(valuesArr);
console.log(IIFESum);

// d.Return all the prime numbers in an array

//1, anonymous
let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let getAnonymousPrimeNum = function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
let findPrime = function (numbers) {
  return numbers.filter(getAnonymousPrimeNum);
};
console.log(findPrime(numbers));

//2, arrow
let getArrowPrimeNum = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
findPrime = (numbers) => {
  return numbers.filter(getArrowPrimeNum);
};
console.log(findPrime(numbers));

//3, IIFE
let IIFEPrimeNumber;
(function (num) {
  IIFEPrimeNumber = num.filter(function (num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  });
})(numbers);

console.log(findPrime(numbers));

// e.Return all the palindromes in an array

//1, anonymous
let words = ["racecar", "apple", "level", "deified", "hello", "madam"];
let isPalindrome = function (str) {
  let value = str.split("").reverse().join("");
  return value === str;
};
let palindrome = function (words) {
  return words.filter(isPalindrome);
};
console.log(palindrome(words));

//2, arrow
let isPalindromeInArrow = (str) => {
  let value = str.split("").reverse().join("");
  return value === str;
};
let palindromeInArrow = (words) => {
  return words.filter(isPalindromeInArrow);
};
console.log(palindromeInArrow(words));

//3, IIFE
let palindromeInIIFE;
(function (str) {
  palindromeInIIFE = words.filter(function (str) {
    let value = str.split("").reverse().join("");
    return value === str;
  });
})(words);

console.log(palindromeInIIFE);

//g. Remove duplicates from an array
let array = [2, 4, 3, 7, 3, 5, 2, 6];
// anonymous

let removedDuplicateValue = function (array) {
  return Array.from(new Set(array));
};
console.log(removedDuplicateValue(removedDuplicateValue(array)));

//h, Rotate an array by k times
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 7;
let limit = 7 % arr.length;
let rotateARR = function () {
  for (i = 0; i < limit; i++) {
    arr.unshift(arr.pop(i));
  }
};
rotateARR();
console.log(arr);
