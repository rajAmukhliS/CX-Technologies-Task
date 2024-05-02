/**
 * function to sort array in descending order
 * @param {*} arr array to sort
 * @returns sorted array
 */
function sortDescending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * funxtion to check if a string is palindrome
 * @param {*} str string to check
 * @returns true or false
 */
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

/**
 * function to get sum of two largest numbers in an array
 * @param {*} arr array as param
 * @returns sum of 2 largest values
 */
function sumOfTwoLargest(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return max1 + max2;
}

/**
 * function for finding missing elements in an array
 * @param {*} arr array as param
 * @returns missing items array
 */
function findMissing(arr) {
  let maxNum = arr[0];
  for (let num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  const missing = [];
  for (let i = 0; i <= maxNum; i++) {
    let found = false;
    for (let num of arr) {
      if (num === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      missing.push(i);
    }
  }
  return missing;
}

/**
 * fun to find the most repeated number in an array
 * @param {*} arr array as param
 * @returns repeated num with its count of occurance
 */
function mostRepeated(arr) {
  const countMap = {};
  let maxCount = 0;
  let mostRepeatedNum = arr[0];
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      mostRepeatedNum = num;
    }
  }
  return `${mostRepeatedNum} is repeated ${maxCount} times.`;
}

/**
 * function to rotate array to the right once
 * @param {*} arr array  to rotate
 * @returns rotated array
 */
function rotateArrayRight(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const lastElement = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = lastElement;
  return arr;
}