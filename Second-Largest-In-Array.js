// Problem Description:
// You are given an array of integers. Write a function to find and return the second largest element in the array.

// # Example 1
// arr = [5, 8, 3, 1, 9]
// result = find_second_largest(arr)
// # result should be 8

// # Example 2
// arr = [15, 7, 12, 18, 10]
// result = find_second_largest(arr)
// # result should be 15


function findSecondLargest(arr) {
  let secondLargest = 0;
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArr);

  if (sortedArr.length === 1) {
    secondLargest = sortedArr[0];
    return sortedArr[0];
  } else {
    secondLargest = sortedArr[sortedArr.length - 2]; 
    return sortedArr[sortedArr.length - 2];
  }
}

console.log("The second Largest int is:", findSecondLargest([40, 100, 1, 5, 25, 10]));
