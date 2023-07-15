// NON-CONSTRUCTIBLE CHANGE

  // Given an array of positive integers representing the values of coins in your
  // possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have
  // any positive integer value and aren't necessarily unique (i.e., you can have
  // multiple coins of the same value).

// Sample Input:
// coins = [5, 7, 1, 1, 2, 3, 22]

// Sample Output: 
// 20

function nonConstructibleChange(coins) {
    // sort the original array to get proper numerical sort 
    coins.sort(function(a,b){
    return a-b;
  })
    // declaring runner variable 
    let change= 0;
    // loop through the sorted array 
    for(let i = 0; i < coins.length; i++){
      // if-conditional checks if the current index is greater than runner + 1
      if (coins[i] > change + 1) {
        break;
      } else {
        // else - runner gets updated to current index + runner 
        change = coins[i] + change;
      }
    }
    // returns smallest change that CANNOT be created 
    console.log("The minimum change that CANNOT be created is: ", change + 1)
    return change + 1
    // console.log(coins)
  }
  
  nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])